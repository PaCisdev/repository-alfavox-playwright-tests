import { test as base } from '@playwright/test';
import testUsers from '../data/testUsers.json';

type Fixtures = {
    Agent1: typeof testUsers.Agent1;
    Agent2: typeof testUsers.Agent2;
};

export const test = base.extend<Fixtures>({
    Agent1: async ({}, use) => {
        await use(testUsers.Agent1);
    },
    Agent2: async ({}, use) => {
        await use(testUsers.Agent2);
    },
});

export { expect } from '@playwright/test';