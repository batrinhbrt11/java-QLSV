package qlsv;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class School{
    private List<Student> students;
    public School(){
        this.students = new ArrayList<>();

    }
    public void addStudent(Student student){
        this.students.add(student);
    }
    public List<Student> getAll(){
        return this.students.stream().collect(Collectors.toList());
    }
    public void findHighestGPA(){
        float max = 0.00f;
        for (Student student : this.students){
            if(max < student.getGPA()){
                max= student.getGPA();
            }
        }
        for (Student student : this.students){
            if(student.getGPA() == max){
                System.out.println("Highest GPA student "+ "\n" +student+ "\n");
            }
        }
    }
    public void findLowestGPA(){
        float min = 10.0f;
        for (Student student : this.students){
            if(min > student.getGPA()){
                min= student.getGPA();
            }
        }
        for (Student student : this.students){
            if(student.getGPA() == min){
                System.out.println("Lowest GPA student "+ "\n" + student+ "\n");
            }
        }
    }
}