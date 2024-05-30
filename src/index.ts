type TaskInstance = {
  title: string;
  isCompleted: boolean;
  complete(boolean: boolean): void;
};

type TaskConstructor = {
  new (title: string): TaskInstance;

  prototype: Pick<TaskInstance, "complete">; // getting complete method type only from task instance type
};

const Task: TaskConstructor = function (this: TaskInstance, title: string) {
  this.title = title;
  this.isCompleted = false;
} as unknown as TaskConstructor;

Task.prototype.complete = function (this: TaskInstance, boolean: boolean) {
  this.isCompleted = boolean;
};

const task1 = new Task("My First Task!");

task1.complete(true);
