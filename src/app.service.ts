import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { concatMap, from, map, tap } from 'rxjs';
import { TypeFormFormsService } from './commons/type-form-clients/type-form-forms.service';
import {
  FORMS_SOURCE_CLIENT,
  FORMS_TARGET_CLIENT,
} from './commons/type-form-clients/type-form.module';

@Injectable()
export class AppService implements OnModuleInit {
  private log = new Logger(AppService.name);
  constructor(
    @Inject(FORMS_SOURCE_CLIENT)
    private readonly formsSource: TypeFormFormsService,
    @Inject(FORMS_TARGET_CLIENT)
    private readonly formsTarget: TypeFormFormsService,
  ) {}

  onModuleInit(): any {
    from(this.formsSource.list())
      .pipe(
        concatMap((result: any) => from(result.items)),
        tap((form) => this.log.warn(JSON.stringify(form))),
        concatMap((form: any) => this.formsSource.get(form.id)),
      )
      .subscribe((result) => this.log.warn(JSON.stringify(result)));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
