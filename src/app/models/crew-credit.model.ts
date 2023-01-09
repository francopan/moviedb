import { PersonCredit } from "./person.model";

export interface CrewCredit extends PersonCredit {
    department: string;
    job: string;
}