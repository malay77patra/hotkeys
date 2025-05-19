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
import OSSelector from '@/components/os-selector'

export default async function SoftwarePage({ params, searchParams }) {
    const { slug } = await params
    const { os } = await searchParams
    const selectedOS = os || "win"
    const software = getSoftwareBySlug(slug)
    const icon = getIconBySlug(slug)

    if (!software) {
        notFound()
    }

    const filteredHotkeys = software.hotkeys?.filter(hotkey => {
        if (typeof hotkey.key === 'object') {
            return selectedOS in hotkey.key;
        }
        
        return true;
    }).map(hotkey => {
        
        return {
            ...hotkey,
            displayKey: typeof hotkey.key === 'object' ? hotkey.key[selectedOS] : hotkey.key
        };
    });
    
    const isHotKeys = filteredHotkeys?.length > 0;

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

            <OSSelector os={os} />

            {isHotKeys ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>KEY</TableHead>
                            <TableHead>DESCRIPTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredHotkeys.map((hotkey, idx) => {
                            return (
                                <TableRow key={idx}>
                                    <TableCell>
                                        <kbd className="border p-1 rounded-sm font-mono bg-muted-foreground/10">
                                            {hotkey.displayKey}
                                        </kbd>
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
                <p className="text-muted-foreground">No keyboard shortcuts available for {selectedOS}.</p>
            )}
        </main>
    )
}