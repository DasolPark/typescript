{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
    console.log(person);
  }

  internWork({
    name: 'david',
    score: 4.42,
    employeeId: 201532056,
    work: () => { },
  })
}