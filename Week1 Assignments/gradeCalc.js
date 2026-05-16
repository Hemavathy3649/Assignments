function studentScore(mark)
{
    
    switch(true)
    {
        
        case (mark>=40 && mark<=50):console.log("Grade E")
        break;
        case (mark>=51 && mark<=60): console.log("Grade D")
        break;
        case (mark>=61 && mark<=70):console.log("Grade C")
        break;
        case (mark>=71 && mark<=80):console.log("Grade B")
        break;
        case (mark>=81 && mark<=100):console.log("Grade A")
        break;
        default: console.log("fail")
        break;
    }
}
studentScore(72)