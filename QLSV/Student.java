package qlsv;

public class Student {
    String name; 
    String classRoom;
    float exam1;
    float exam2;
    float GPA;
    public Student(String name , String classRoom,float exam1, float exam2){
        this.name=name;
        this.classRoom= classRoom;
        this.exam1=exam1;
        this.exam2=exam2;
        this.GPA=(exam1+exam2)/2;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }
    public String getClassRoom(){
        return classRoom;
    }
    public void setClassRoom(String classRoom){
        this.classRoom=classRoom;
    }
    public float getExam1(){
        return exam1;
    }
    public float getExam2(){
        return exam2;
    }
    public void setExam1(float exam1){
        this.exam1=exam1;
        this.GPA=(exam1+this.exam2)/2;
    }
    public void setExam2(float exam2){
        this.exam2=exam2;
        this.GPA=(exam2+this.exam1)/2;
    }
    public float getGPA(){
        return GPA;
    }
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", class=" + classRoom +
                ", exam1='" + exam1 + '\'' +
                ", exam2='" + exam2 + '\''+
                ", GPA='" + GPA + '\''+
                '}';
    }
}