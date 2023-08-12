import { createClient, Typeform } from '@typeform/api-client';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TypeFormFormsService {
  private log = new Logger(TypeFormFormsService.name);
  private readonly formClient;
  constructor(args?: Typeform.ClientArg) {
    const { forms } = createClient(args);
    this.formClient = forms;
  }

  list() {
    return this.formClient.list();
  }

  get(uid) {
    this.log.warn(uid);
    return this.formClient.get({ uid });
  }

  create(data) {
    return this.formClient.create({ data });
  }
}
