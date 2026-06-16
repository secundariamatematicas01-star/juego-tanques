export class SaveSystem {

    constructor() {

        this.record =

        Number(

            localStorage.getItem(
                "tanquesRecord"
            )

        ) || 0;
    }

    saveRecord() {

        localStorage.setItem(

            "tanquesRecord",

            this.record
        );
    }
}
