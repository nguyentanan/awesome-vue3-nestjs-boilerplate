/* eslint-disable import/no-default-export */
import type { Factory, Seeder } from 'typeorm-seeding'

import { User } from '../../modules/user/user.entity'

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().createMany(1)
  }
}
