import { Module } from '@nestjs/common';
import { TypeFormFormsService } from './type-form-forms.service';

export const FORMS_SOURCE_CLIENT = 'FORMS_SOURCE_CLIENT';
export const FORMS_TARGET_CLIENT = 'FORMS_TARGET_CLIENT';

@Module({
  providers: [
    {
      provide: FORMS_SOURCE_CLIENT,
      useFactory: () =>
        new TypeFormFormsService({
          token:
            'tfp_GZTUjxEC8zb6Vy3ZeC9NqZDazdJRHEiJ58FhaVnZPeMb_dKNhfLTnzPe7',
        }),
      inject: [],
    },
    {
      provide: FORMS_TARGET_CLIENT,
      useFactory: () =>
        new TypeFormFormsService({
          token:
            'tfp_GZTUjxEC8zb6Vy3ZeC9NqZDazdJRHEiJ58FhaVnZPeMb_dKNhfLTnzPe7',
        }),
      inject: [],
    },
  ],
  exports: [FORMS_TARGET_CLIENT, FORMS_SOURCE_CLIENT],
})
export class TypeFormModule {}
