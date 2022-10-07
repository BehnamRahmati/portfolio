import PrimaryCard, {IPrimaryCard} from "@/components/cards/primary_card/PrimaryCard";

export const renderPrimaryCards = (works: IPrimaryCard[]) => {
    let evens: IPrimaryCard[] = [];
    let odds: IPrimaryCard[] = [];

    works.forEach((work,i) => {

        if(i % 2 === 0) {
            evens = [...evens , work];
        } else {
            odds = [...odds , work]
        }

    })

    return (
        <div className="grid grid-cols1 lg:grid-cols-2 gap-20 py-20 ">
        <div className={'flex flex-col space-y-20 pt-20'}>
            {odds.map((work , i) => <PrimaryCard key={i}  {...work}  />)}
        </div>
        <div className={'flex flex-col space-y-20'}>
            {evens.map((work , i) => <PrimaryCard key={i}  {...work}  />)}
        </div>
    </div>
)
}