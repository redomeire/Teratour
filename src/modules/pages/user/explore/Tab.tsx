import { useState } from "react"

import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";

interface Tabs {
    item: string[]
}

const Tab = ({ item }: Tabs) => {
    const [tab, setTab] = useState('Wisata');

    return (
        <div className="flex items-center flex-wrap w-fit">
            {
                item.map((data, index) => {
                    return (
                        <Button onClick={() => { setTab(data) }} key={index} color="tertiary" className={`!min-w-[150px] border-b-2 !rounded-none ${tab === data ? 'border-b-red-500' : 'border-b-transparent'}`}>
                            <Typography variant="body" className="font-semibold">{data}</Typography>
                        </Button>
                    )
                })
            }
        </div>
    );
}

export default Tab;
