import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "limpar",
    description: "Limpar memsagens do chat.",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "quantidade",
            description: "O total de mensagens a serem excluidas.",
            type: ApplicationCommandOptionType.Integer,
            required: true,
        },
        {
            name: "autor",
            description: "O total de mensagens a serem excluidas.",
            type: ApplicationCommandOptionType.User,
            required: false,
        }
    ],
    async run({interaction, options}) {
        
        
    },
})