class Department {
  protected employees: string[] = [];

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}

class DeveloperDepartment extends Department {
  constructor(name: string, private readonly skills: string[] = []) {
    super(name);
  }

  describe() {
    console.log(
      `Department: ${this.name} with people ${this.employees.join()}`
    );
  }
}

const department = new DeveloperDepartment("M0124", [
  "TypeScript",
  "Jquery",
  "SASS",
  "JavaScript",
  "Animation"
]);

department.addEmployee("Joao");
department.addEmployee("Joan");
department.addEmployee("Mika");
department.describe();
