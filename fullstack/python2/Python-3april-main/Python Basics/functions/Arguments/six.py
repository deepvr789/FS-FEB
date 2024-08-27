def display_emp(admin,*employees):
    print("Admin Name:", admin, "Employees", employees)
    for employee in employees:
        print(employee)


display_emp("Modi","Rahul","Sonia","Priyanka")