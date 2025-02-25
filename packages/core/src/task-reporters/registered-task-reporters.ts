import { TaskName, TaskFormatter } from '../types/tasks.js';

const registeredTaskReporters = new Map<TaskName, TaskFormatter>();

export function getRegisteredTaskReporters() {
  return registeredTaskReporters;
}

export function registerTaskReporter(taskName: TaskName, report: TaskFormatter) {
  registeredTaskReporters.set(taskName, report);
}
