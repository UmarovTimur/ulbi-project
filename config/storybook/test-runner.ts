// .storybook/test-runner.ts
import { TestRunnerConfig } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import path from 'path';

const config: TestRunnerConfig = {
  setup() {
    // Добавляем матчер для сравнения скриншотов (используем jest-image-snapshot)
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Получаем информацию о стори (например, чтобы создать уникальное имя файла)
    const { id, title, name } = context;

    // Делаем скриншот
    const screenshot = await page.screenshot();

    // Сравниваем с эталоном
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotIdentifier: id, // Используем ID стори как имя файла
      failureThreshold: 0.02,       // Допустимый процент расхождения (2%)
      failureThresholdType: 'percent',
      customSnapshotsDir: path.join(process.cwd(), 'tests', '__image_snapshots__', `${title}_${name}`), // Где хранить эталоны
    });
  },
};

export default config;