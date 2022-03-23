import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../../Command";
var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://api.coincap.io/v2/assets/cardano',
    headers: { }
};

export const Cardano: Command = {
    name: "cardano",
    description: "get current cardano price",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        let content;

        try {
            const response = await axios(config)

            content = ':money_with_wings: $' + Number(response.data.data.priceUsd).toFixed(2) + ' - ADA'
        }catch (err: any) {
            console.log('Error retrieving cardano price', err)
            content = "There was an error, oops"
        }

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};