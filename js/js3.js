class Student {
    constructor(id,name,studentStatus,major,grade,classes,age,) {
        this._id = id;
        this._name = name;
        this._studentStatus = studentStatus;
        this._major = major;
        this._grade = grade;
        this._classes = classes;
        this._age = age;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get studentStatus() {
        return this._studentStatus;
    }

    set studentStatus(value) {
        this._studentStatus = value;
    }

    get major() {
        return this._major;
    }

    set major(value) {
        this._major = value;
    }

    get grade() {
        return this._grade;
    }

    set grade(value) {
        this._grade = value;
    }

    get classes() {
        return this._classes;
    }

    set classes(value) {
        this._classes = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}
let students=new Array();
function creatStudent(){
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010109","lx","人工智能学院","数据科学与大数据专业",2020,01,18));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));
    students.push(new Student("12023010117","hww","人工智能学院","数据科学与大数据专业",2020,01,20));

}
creatStudent();
let head=
    "<tr style='background-color: rgb(218, 222, 225);height: 55px'>"+
    "<td><input id='checkAllStudent' name='selectedAllStudent' type='checkbox'></td>"+
    "<td>序号</td>"+
    "<td>学号</td>"+
    "<td>姓名</td>"+
    "<td>学院</td>"+
    "<td>专业</td>"+
    "<td>年级</td>"+
    "<td>班级</td>"+
    " <td>年龄</td>"+
    "<td>操作</td>"+
    "</tr>"

//展示学生
let allPage = parseInt(students.length/10+1)
let currentPage = 1;
let onePage = 10;
let begin = 0;
$(document).ready(function () {
    $(".currentPage").val(currentPage)
    $(".allPage").val(allPage)
    // console.log(students[1])
    // console.log(allPage)
    // console.log($(".currentPage").val())
    $(".studentTable").html(showStudent());
    $(".newPage").html(renewPage())        //页数显示
})

function showStudent() {
    let s = head;
    for (var i = begin; i < onePage&&i<students.length; i++) {
        let oddNum = "<tr class='odd'>"
        let evenNum = "<tr class='even'>"

        if (i % 2 == 0) {   //判断奇偶数  增加class样式
            s = s + oddNum;
        } else {
            s = s + evenNum;
        }
        s = s +
            " <td>" + "<input class='check_student' name='selectedStudent' type='checkbox'>" + "</td>" +
            "<td>" + (i  + 1) + "</td>" +
            "<td>" + students[i]._id + "</td>" +
            '<td>' + students[i]._name + '</td>' +
            "<td>" + students[i]._studentStatus + "</td>" +
            '<td>' + students[i]._major + '</td>' +
            "<td>" + students[i]._grade + "</td>" +
            '<td>' + students[i]._classes + '</td>' +
            "<td>" + students[i]._age + "</td>" +
            "<td><span class='checkStudentBtn'>查看</span><span class='delStudentBtn'>修改</span></td>" +
            "</td>" +
            '</tr>'
    }
    return s;
}
function renewPage() {
    if(students.length%10==0){
        allPage=students.length/10
    }else {
        allPage=(parseInt(students.length/10))+1
    }
    return  "第"+currentPage+"页,共"+allPage+"页（每页十条）"
}
$(function () {
    //下一页
    $(".nextPage").click(function () {
        if (currentPage >= allPage){
            alert("已经是最后一页了")
        }else{
            currentPage += 1;
            begin += 10;
            onePage += 10;  //begin增加，onePage同时增加
            // console.log(currentPage, begin)
            // console.log(showStudent())
            $(".studentTable").html(showStudent());
            $(".newPage").html(renewPage())        //页数显示
        }
    })

    // 上一页的方法
    function prePage (){
        if (currentPage === 1){
            alert("已经是第一页了")
        }else{
            currentPage -= 1;
            begin -= 10;
            onePage -= 10;  //begin增加，onePage同时增加
            // console.log(currentPage, begin)
            // console.log(showStudent())
            $(".studentTable").html(showStudent());
            $(".newPage").html(renewPage())        //页数显示
        }
    }

    //上一页
    $(".prePage").click(function () {
        if (currentPage === 1){
            alert("已经是第一页了")
        }else{
            currentPage -= 1;
            begin -= 10;
            onePage -= 10;  //begin增加，onePage同时增加
            // console.log(currentPage, begin)
            // console.log(showStudent())
            $(".studentTable").html(showStudent());
            $(".newPage").html(renewPage())        //页数显示
        }
    })


    //展示增加学生
    $(".addStudent").click(function () {
        $(".addStudentBox").show();
    })
    //展示增加学生中的确定按钮
    let flag
    $(".addStudentBoxYes").click(function () {
        let addId = $(".inputInfo input").eq(0).val();
        let addName = $(".inputInfo input").eq(1).val();
        let addStudentStatus = $(".inputInfo input").eq(2).val();
        let addMajor = $(".inputInfo input").eq(3).val();
        let addGrade = $(".inputInfo input").eq(4).val();
        let addClass = $(".inputInfo input").eq(5).val();
        let addAge = $(".inputInfo input").eq(6).val();
        alert("确定添加吗");
        // console.log(addId)

        for (var i=0; i<students.length; i++){
            // console.log(addId);
            if (addId === students[i]._id)
                flag = true
        }
        if (flag){
            alert("学号重复，添加失败")
            flag=false;
        }else {
            console.log(addId)
            console.log(students[0])
            students.push(new Student(addId, addName, addStudentStatus, addMajor,addGrade, addClass, addAge))
        }

        $(".addStudentBox").hide();
        //刷新页面
        $(".studentTable").html(showStudent());
        $(".newPage").html(renewPage())        //页数显示

        //值清零下次增加为空
        $(".inputInfo input").eq(0).val("");
        $(".inputInfo input").eq(1).val("");
        $(".inputInfo input").eq(2).val("");
        $(".inputInfo input").eq(3).val("");
        $(".inputInfo input").eq(4).val("");
        $(".inputInfo input").eq(5).val("");
        $(".inputInfo input").eq(6).val("");
    })
    //表单验证
    $('.id').on('blur',function () {
        let reg = /^\d{11}$/;
        let num = 11912050126
        let addId = $(".inputInfo input").eq(0).val();
        console.log(reg.test(addId))
        // console.log(reg.test(parseInt(add)))
        if (reg.test(addId)){
            $(this).next().html("<img src='2.png' style='width: 15px; height: 15px'>")
        }else {
            $(this).next().html("<img src='1.png' style='width: 15px; height: 15px'>")
        }
    })
    $('.checkId').on('blur',function () {
        let reg = /^\d{11}$/;
        let num = 11912050126
        let addId = $(".changeInputInfo input").eq(0).val();
        console.log(reg.test(addId))
        // console.log(reg.test(parseInt(add)))
        if (reg.test(addId)){
            $(this).next().html("<img src='2.png' style='width: 15px; height: 15px'>")
        }else {
            $(this).next().html("<img src='1.png' style='width: 15px; height: 15px'>")
        }
    })

    //展示增加学生中的取消按钮
    $(".addStudentBoxNo").click(function () {
        //值清零下次增加为空
        $(".inputInfo input").eq(0).val("");
        $(".inputInfo input").eq(1).val("");
        $(".inputInfo input").eq(2).val("");
        $(".inputInfo input").eq(3).val("");
        $(".inputInfo input").eq(4).val("");
        $(".inputInfo input").eq(5).val("");
        $(".inputInfo input").eq(6).val("");
        $(".addStudentBox").hide();
    })
    //查看学生
    $(document).on('click','.checkStudentBtn',function (){
        $(".checkStudentBox").show()
        //获取序号
        let num = $(this).parents("tr").children("td").eq(1).text()

        //在学生的数组中根据序号查出该学生
        $(".checkInputInfo input").eq(0).val(students[num-1]._id)
        $(".checkInputInfo input").eq(1).val(students[num-1]._name)
        $(".checkInputInfo input").eq(2).val(students[num-1]._studentStatus)
        $(".checkInputInfo input").eq(3).val(students[num-1]._major)
        $(".checkInputInfo input").eq(4).val(students[num-1]._grade)
        $(".checkInputInfo input").eq(5).val(students[num-1]._classes)
        $(".checkInputInfo input").eq(6).val(students[num-1]._age)
    })
    //查看学生确定按钮
    $(".checkStudentBoxYes").click(function () {
        $(".checkStudentBox").hide()
    })
    let clickNum;//定义全局变量，在修改学生确定按钮可以使用
    //修改学生按钮
    $(document).on('click','.delStudentBtn',function (){
        $(".changeStudentBox").show()
        clickNum = $(this).parents("tr").children("td").eq(1).text()
        console.log(clickNum);
    })

    //修改学生确定按钮
    $(".changeStudentBoxYes").click(function () {
        let changeId = $(".changeInputInfo input").eq(0).val();
        let changeName = $(".changeInputInfo input").eq(1).val();
        let changeStudentStatus = $(".changeInputInfo input").eq(2).val();
        let changedMajor = $(".changeInputInfo input").eq(3).val();
        let changeGrade = $(".changeInputInfo input").eq(4).val();
        let changeClass = $(".changeInputInfo input").eq(5).val();
        let changeAge = $(".changeInputInfo input").eq(6).val();

        $(".changeStudentBox").hide();

        console.log(students[clickNum-1])
        students[clickNum-1]._age = changeAge;
        students[clickNum-1]._classes = changeClass;
        students[clickNum-1]._id = changeId;
        students[clickNum-1]._name = changeName;
        students[clickNum-1]._studentStatus = changeStudentStatus;
        students[clickNum-1]._major = changedMajor;
        students[clickNum-1]._grade = changeGrade;

        $(".studentTable").html(showStudent());
        // $(".newPage").html(renewPage())        //页数显示
    })

    //修改学生取消按钮
    $(".changeStudentBoxNo").click(function () {
        $(".changeStudentBox").hide();
    })

    //全选
    $(document).on('click','#checkAllStudent', function () {
        $("input[name='selectedStudent']").prop("checked", this.checked)
    })

    //删除学生
    $(".delStudent").click(function () {
        let deleteArray = new Array();
        //循环当页面的check，如果选择了就加入删除数组

        for (var i=begin;i<onePage&&i<students.length;i++){
            let isCheck = $(".check_student").eq(i-begin).is(":checked")
            // console.log(isCheck)

            if(isCheck){//i-begin就是第一个
                deleteArray.push(i)
            }
        }
        for (var i=0;i<deleteArray.length;i++){

            console.log(deleteArray[i]-i)
            console.log(deleteArray[i])
            console.log(i)
            students.splice(deleteArray[i]-i,1)
        }

        $(".newPage").html(renewPage())
        $(".studentTable").html(showStudent());

        //判断当前页数和所有页数，是否该页无学生
        if (currentPage > allPage){
            console.log("自带上一页")
            prePage()
        }
    })

})



