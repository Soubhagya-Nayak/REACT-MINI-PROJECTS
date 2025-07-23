import { useParams } from "react-router"

export const User = () => {

    const {userId} = useParams();

    return (
        <>
            <div className="bg-orange-600 text-white text-3xl p-4">User: {userId}</div>
        </>
    )
}