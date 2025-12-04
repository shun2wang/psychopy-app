import { Experiment, Script } from "$lib/experiment";
import { Clipboard } from "$lib/utils/clipboard";
import i18n from "i18n";


export let current = $state({
    user: undefined,
    file: undefined,
    project: undefined,
    experiment: new Experiment("untitled.psyexp"),
    readme: {
        shown: false,
        script: new Script("readme.md")
    },
    routine: undefined,
    moving: undefined,
    inserting: undefined,
    clipboard: new Clipboard(),
    i18n: i18n
})
