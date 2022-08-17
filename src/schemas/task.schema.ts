import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  body: string;

  @Prop()
  data1: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
