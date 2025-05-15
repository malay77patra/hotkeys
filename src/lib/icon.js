import fs from 'fs'
import path from 'path'

const ICON_DIR = path.join(process.cwd(), 'public', 'icon')
const VALID_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg']

export function getIconBySlug(slug) {
    if (!fs.existsSync(ICON_DIR)) return null

    const files = fs.readdirSync(ICON_DIR)

    for (const file of files) {
        const ext = path.extname(file).toLowerCase()
        const name = path.basename(file, ext).toLowerCase()

        if (name === slug.toLowerCase() && VALID_IMAGE_EXTENSIONS.includes(ext)) {
            return file
        }
    }

    return null
}
