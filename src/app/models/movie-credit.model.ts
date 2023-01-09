import { CastCredit } from "./cast-credit.model";
import { CrewCredit } from "./crew-credit.model";

export interface MovieCredit {
    id: number;
    cast:Array<CastCredit>;
    crew: Array<CrewCredit>;
}