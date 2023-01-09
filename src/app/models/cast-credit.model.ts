import { PersonCredit } from "./person.model";

export interface CastCredit extends PersonCredit {
    cast_id: number;
    character: string;
    order: number;
}