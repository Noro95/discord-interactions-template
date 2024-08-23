import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  InteractionResponseType,
  MessageFlags,
} from "discord-api-types/v10";
import { CommandData } from "@utils";

export default {
  name: "echo",
  description: "echo a message",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "message",
      description: "the message to echo",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  contexts: [0, 1, 2],
  integration_types: [0, 1],
  run: (res, _int, _sub, options) => {
    return res.json({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: options.getString("message", true),
        flags: MessageFlags.Ephemeral,
      },
    });
  },
} as CommandData;
