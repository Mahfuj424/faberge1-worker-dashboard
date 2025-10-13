import { Button } from "@/components/ui/button"

interface OutlineButtonProps {
    name: string
}

export const OutlineButton = ({ name }: OutlineButtonProps) => {
    return (
        <Button
            variant="outline"
            className="btn-outline text-xl cursor-pointer md:px-16 px-8 md:py-7 py-5 rounded-lg"
        >
            {name}
        </Button>

    )
}
