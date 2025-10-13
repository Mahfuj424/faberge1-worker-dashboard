import { Button } from "@/components/ui/button"

interface PrimaryButtonProps {
    name: string
}

export const PrimaryButton = ({ name }: PrimaryButtonProps) => {
    return (
        <Button className="btn text-xl cursor-pointer md:px-16 px-8 md:py-8 py-6">
            {name}
        </Button>

    )
}
