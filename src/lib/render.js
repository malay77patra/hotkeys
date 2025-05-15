import fs from 'fs'
import path from 'path'
import { getIconBySlug } from './icon.js'

const DATA_DIR = path.join(process.cwd(), 'data')
const VALID_FILENAME_REGEX = /^[a-zA-Z0-9-]+\.json$/
const YELLOW = '\x1b[33m'
const RESET = '\x1b[0m'

export function getAllSoftwares() {
    if (!fs.existsSync(DATA_DIR)) return []

    const allFiles = fs.readdirSync(DATA_DIR)

    allFiles.forEach((file) => {
        if (!VALID_FILENAME_REGEX.test(file)) {
            console.warn(
                `${YELLOW}⚠ Skipping file "${file}" because the filename is invalid.${RESET}
1. Can only contain letters, numbers, and hyphens
2. must not include spaces or special characters
3. must end with .json`)
        }
    })

    const files = allFiles.filter((file) => VALID_FILENAME_REGEX.test(file))

    const softwares = []

    for (const file of files) {
        const slug = path.basename(file, '.json')

        try {
            const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf8')
            const data = JSON.parse(content)

            if (typeof data.name !== 'string' || !data.name.trim()) {
                continue
            }

            const icon = getIconBySlug(slug)

            softwares.push({
                name: data.name.trim(),
                slug,
                logo: icon ? `/icon/${icon}` : null
            })

        } catch (err) {
            console.warn(`Invalid software JSON: ${file}`, err)
            continue
        }
    }

    return softwares
}

export function getSoftwareBySlug(slug) {
    if (!slug || typeof slug !== 'string') return null

    if (!/^[a-zA-Z0-9-]+$/.test(slug)) {
        return null
    }

    const filePath = path.join(DATA_DIR, `${slug}.json`)

    if (!fs.existsSync(filePath)) {
        return null
    }

    try {
        const content = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(content)
    } catch {
        return null
    }
}


