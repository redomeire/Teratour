import Typography from "@/components/typography/Typography";

const CardDestination = () => {
    return (
        <div className="min-h-[250px] rounded-lg shadow-md bg-cover bg-center relative" style={{ background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('https://images.unsplash.com/photo-1593012799845-c614e21ae505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80')", backgroundSize: 'cover' }}>
            <div className="absolute left-3 bottom-3 text-start">
                <Typography variant="body2" className="text-white font-semibold mb-2">Jakarta</Typography>
                <Typography variant="body2" className="text-white">100 itinerary</Typography>
            </div>
        </div>
    )
}

export default CardDestination;
