import {
  ApplicationCommandType,
  InteractionResponseType,
} from "discord-api-types/v10";
import { CommandData } from "@utils";

export default {
  name: "ping",
  description: "Pong!",
  type: ApplicationCommandType.ChatInput,
  contexts: [0, 1, 2],
  integration_types: [0, 1],
  run: (res) => {
    return res.json({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: "Pong!",
      },
    });
  },
} as CommandData;
