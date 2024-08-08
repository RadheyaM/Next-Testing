const getCostings = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/costings", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch costings');
        }

        return res.json();
    } catch (error) {
        console.log("Error loading costings: ", error);
    }
}

export default async function CostingList() {
    const {costings} = await getCostings();

    return(
        <>
        </>
    )
}