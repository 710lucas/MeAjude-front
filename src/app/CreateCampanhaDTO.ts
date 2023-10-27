export type CreateCampanhaDTO ={
    title : string;
    description : string;
    goal : number | undefined;
    finalDate: string;
    creatorId : number;
}