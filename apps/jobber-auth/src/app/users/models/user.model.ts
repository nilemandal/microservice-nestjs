import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
    @Field(() => Number)
    id: number;

    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;
}