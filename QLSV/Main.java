package qlsv;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Scanner;
public class Main{
    public static void main(String[] args){
        School school= new School();
        Scanner scanner = new Scanner(System.in);
        while(true){
            System.out.println("Application Manager Student");
            System.out.println("Enter 1: To insert Student");
            System.out.println("Enter 2: To show all Student");
            System.out.println("Enter 3: To show highest GPA student");
            System.out.println("Enter 4: To show Lowest GPA student");
            System.out.println("Enter 5: To Exit");
            String line = scanner.nextLine();
            switch (line) {
                case "1":{
                    System.out.print("Enter name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter class: ");
                    String classRoom = scanner.nextLine();
                    System.out.print("Enter exam1: ");
                    String exam1 = scanner.nextLine();
                    System.out.print("Enter exam2: ");
                    String exam2 = scanner.nextLine();
                    Student student= new Student(name, classRoom,Float.parseFloat(exam1),Float.parseFloat(exam2));
                    school.addStudent(student);
                    System.out.println(student.toString());
                    break;
                }
                case "2":{
                    System.out.println(school.getAll()+ "\n");
                     break;
                }
                case "3":{
                    school.findHighestGPA();
                    break;
                }
                case "4":{
                    school.findLowestGPA();
                    break;
                }
                case "5": {
                    return;
                }
                default:
                    System.out.println("Invalid");
                    continue;
            }
        }
    }
}