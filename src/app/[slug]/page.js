import { getSoftwareBySlug } from '@/lib/render'
import { getIconBySlug } from '@/lib/icon'
import { notFound } from 'next/navigation'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'

export default async function SoftwarePage({ params }) {
    const { slug } = await params
    const software = getSoftwareBySlug(slug)
    const icon = getIconBySlug(slug)
    const isHotKeys = software?.hotkeys?.length > 0

    if (!software) {
        notFound()
    }

    return (
        <main className="p-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
                {icon && (
                    <Image
                        height={100}
                        width={100}
                        alt='Logo'
                        src={`/icon/${icon}`}
                        className="size-6"
                    />
                )}
                <h1 className="text-xl font-bold">{software.name}</h1>
            </div>
            {isHotKeys ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>KEY</TableHead>
                            <TableHead>DESCRIPTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {software.hotkeys?.map((hotkey, idx) => {
                            return (
                                <TableRow key={idx}>
                                    <TableCell>
                                        <kbd className="border p-1 rounded-sm font-mono bg-muted-foreground/10">{hotkey.key}</kbd>
                                    </TableCell>
                                    <TableCell>
                                        <p>{hotkey.description}</p>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            ) : (
                <p className="text-muted-foreground">No keyboard shortcuts yet.</p>
            )}
        </main>
    )
}
