import { Module } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { StoriesService } from "../stories/stories.service";
import { DrizzleProvider } from "../drizzle/drizzle.provider";
import { EditorsService } from "../editors/editors.service";
import { ProducerService } from "../kafka/producer.service";
import { ConsumerService } from "../kafka/consumer.service";

@Module({
  controllers: [MessagesController],
  providers: [
    MessagesService,
    DrizzleProvider,
    EditorsService,
    StoriesService,
    ProducerService,
    ConsumerService,
  ],
})
export class MessagesModule {}
