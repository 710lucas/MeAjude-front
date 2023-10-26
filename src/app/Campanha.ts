export interface Campanha{
    active: boolean;
    title: string;
    description : string;
    goal: number;
    startingDate: string;
    finalDate: string;
    deleted: boolean;
    creatorId: number;
    raisedMoney: number;
    id: number;
}