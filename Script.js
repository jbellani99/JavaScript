class calculator {

    constructor(prev_data, curr_data) {
        this.curr_data = curr_data;
        this.prev_data = prev_data;
        this.clear();
        this.memory = [];

    }

    clear() {

        this.current_display = " ";
        this.previous_display = " ";
        this.process_operand = undefined;

    }

    delete() {


        this.current_display = this.current_display.toString().slice(0, -1);



    }
    appendnum(number) {
        //   Number this.number;
        if (number == '.' && this.current_display.includes('.')) return
        this.current_display = this.current_display.toString() + number.toString();
        // console.log(number);




    }

    operations(process_operand) {
        if (this.current_display === '') return



        if (this.previous_display != '') {

            this.process();


        }
        this.process_operand = process_operand;
        if (process_operand == 'xy') {
            this.process_operand = '^';

        }
        else if (process_operand == '10x') {


            this.process_operand = '10^';

        }
        else if (process_operand == 'log') {


            this.process_operand = 'log()';

        }
        else if (process_operand == 'ln') {


            this.process_operand = 'ln()';

        }
        else if (process_operand == '+/-') {


            this.process_operand = 'negative';

        }
        this.previous_display = this.current_display;
        this.current_display = ' ';


    }


    process() {

        let answer;
        const prev_value = parseFloat(this.previous_display);
        const curr_value = parseFloat(this.current_display);
        if (isNaN(prev_value || isNaN(curr_value))) return

        switch (this.process_operand) {
            case '+':
                answer = prev_value + curr_value;
                break;
            case '-':
                answer = prev_value - curr_value;
                break;
            case '*':
                answer = prev_value * curr_value;
                break;
            case '??':
                answer = prev_value / curr_value;
                break;
            case '??':
                answer = Math.PI;
                break;

            case 'mod':
                answer = prev_value % curr_value;
                break;
            case '^':
                answer = Math.pow(prev_value, curr_value);
                break;
            case '10^':
                answer = Math.pow(10, curr_value);
                break;
            case 'log()':
                answer = Math.log10(curr_value);
                break;
            case 'ln()':
                answer = Math.log2(curr_value);
                break;
            case 'negative':
                answer = ((-1) * curr_value);
                console.log(answer)
                break;
            case 'Sin':
                answer = Math.sin(curr_value);
                console.log(answer)
                break;
            case 'Cos':
                answer = Math.cos(curr_value);
                console.log(answer)
                break;
            case 'Tan':
                answer = Math.tan(curr_value);
                console.log(answer)
                break;

            case 'Csc':
                answer = 1 / Math.sin(curr_value);
                console.log(answer)
                break;
            case 'Sec':
                answer = 1 / Math.cos(curr_value);
                console.log(answer)
                break;
            case 'Cot':
                answer = 1 / Math.tan(curr_value);
                console.log(answer)
                break;
            default:
                return;

        }
        this.current_display = answer;
        this.process_operand = undefined;
        this.previous_display = " ";


    }



    getdisplaynumber(number) {
        const stringnum = number.toString();
        const intnum = parseFloat(stringnum.split('.')[0]);
        const decimalnum = stringnum.split('.')[1];

        let intdisplay;
        if (isNaN(intnum)) {
            intdisplay = '';

        }
        else {

            intdisplay = intnum.toLocaleString('en', { maximumFractionDigits: 0 })

        }
        if (decimalnum != null) {

            return `${intdisplay}.${decimalnum}`;



        }

        else {

            return intdisplay;


        }


    }


    sqr() {

        let answer;
        const prev_value = parseFloat(this.previous_display);
        const curr_value = parseFloat(this.current_display);
        //console.log(curr_value)
        if (curr_value != null) {
            answer = Math.pow(curr_value, 2);
            this.current_display = answer;
            this.process_operand = undefined;
            this.previous_display = " ";

        }



    }




    absolone_num() {

        let answer;
        const prev_value = parseFloat(this.previous_display);
        const curr_value = parseFloat(this.current_display);
        //console.log(curr_value)
        if (curr_value != null) {
            answer = Math.abs(curr_value);
            this.current_display = answer;
            this.process_operand = undefined;
            this.previous_display = " ";

        }



    }



    exponentional_num() {

        let answer;
        let prev_value
        //  const prev_value = parseFloat(this.previous_display);
        const curr_value = parseFloat(this.current_display);
        console.log(curr_value)
        //console.log(curr_value)
        if (curr_value != null) {
            prev_value = 1;
            answer = curr_value.toExponential();
            console.log(answer)
            this.current_display = answer;
            this.process_operand = undefined;
            this.previous_display = " ";
            //this.current_display.innerText = answer;
        }



    }
    updateDisplay() {


        const opr1 = ['negative'];
        const opr2 = ['negative'];
        this.curr_data.innerText = this.getdisplaynumber(this.current_display);
        if (this.process_operand != null) {



            if (opr1.includes(this.process_operand)) {

                this.prev_data.innerText = `${this.process_operand} (${this.getdisplaynumber(this.current_display)})`;
                this.curr_data.innerText = ' ';
                return;



            }
            else if (opr2.includes(this.process_operand)) {
                this.prev_data.innerText = `${this.process_operand} (${this.getdisplaynumber(this.previous_display)})`;
                this.curr_data.innerText = ' ';

                return;




            }


        }
        else {

            this.prev_data.innerHTML = ' ';

        }
        //console.log('e4rror');








    }
    divide() {
        let answer;
        const prev_value = parseFloat(this.previous_display);
        const curr_value = parseFloat(this.current_display);
        if (curr_value != null) {

            answer = 1 / curr_value;

        }
        else {

            answer = 0;

        }

        this.current_display = answer;
        this.process_operand = undefined;
        this.previous_display = " ";


    }

    sqrt() {


        let answer;
        const prev_value = parseFloat(this.previous_display);
        const curr_value = parseFloat(this.current_display);
        //console.log(curr_value)
        if (curr_value != null) {
            answer = Math.sqrt(curr_value);
            this.current_display = answer;
            this.process_operand = undefined;
            this.previous_display = " ";

        }


    }
    num_fact() {

        let answer = 1;
        const prev_value = parseFloat(this.previous_display);
        const curr_value = parseFloat(this.current_display);
        //console.log(curr_value)
        if (curr_value != null) {
            for (let i = 1; i <= curr_value; i++) {
                answer *= i;
            }
            this.current_display = answer;
            this.process_operand = undefined;
            this.previous_display = " ";


        }





    }



    show_result() {

        this.curr_data.innerText = this.getdisplaynumber(this.current_display);
        if (this.process_operand != null) {
            this.prev_data.innerText = `${this.getdisplaynumber(this.previous_display)} ${this.process_operand}`;
        }

        else {

            this.prev_data.innerText = '';



        }

        //console.log(this.curr_data);

    }

    clearMemory() {

        this.memory = [];
        this.current_display = parseFloat(0);
        this.curr_data = 0;


    }

    added() {

        let index = this.memory.length;
        if (this.current_display != ' ' && index == 0) {

            this.memory.push(parseFloat(this.current_display));


        }
        index = this.memory.length;
        if (index > 0) {


            this.memory[index - 1] -= parseFloat(this.current_display);
            console.log(this.memory);



        }

    }


    re_call() {
        let memory = [];
        let ind = this.memory.length;
        if (ind != 0) {


            this.current_display = parseFloat(this.memory[ind - 1]);
            this.curr_data.innerText = this.memory[ind - 1];
        }



    }
    minus() {

        let index = this.memory.length;
        if (index > 0) {


            this.memory[index - 1] -= parseFloat(this.current_display);
            console.log(this.memory);

        }


    }

    stored() {

        let memory = [];
        if (this.current_display == ' ') {
            return
        }
        this.memory.push(this.current_display);
        console.log(this.memory);




    }

}


const num1 = document.querySelectorAll('[numeric]');
const operand = document.querySelectorAll('[operation]');
const ans = document.querySelector('[equals]');
const del = document.querySelector('[clear]');
const p_i = document.querySelector('[pi]');
const sqr_num = document.querySelector('[sqr]');
const fact_num = document.querySelector('[fact]');
const sqrt_num = document.querySelector('[sqrt]');
const divide_num = document.querySelector('[divide]');
const pow_num = document.querySelector('[power]');
const abs_num = document.querySelector('[absolone]');
const exp_num = document.querySelector('[exponentiional]');
const mod_num = document.querySelector('[modulo]');
const e_button = document.querySelector('[ebutton]');
const allclear = document.querySelector('[cleaner]');
const memory_mr = document.querySelector('[memory-mr]');
const memory_mc = document.querySelector('[memory-mc]');
const memory_mplus = document.querySelector('[memory-m-plus]');
const memory_m_minus = document.querySelector('[memory-m-]');
const memory_ms = document.querySelector('[memory-ms]');
const prev_data = document.querySelector('[previous-data]');
const curr_data = document.querySelector('[current-data]');



const cal = new calculator(prev_data, curr_data)

num1.forEach(button => {


    button.addEventListener('click', () => {


        cal.appendnum(button.innerText);
        cal.show_result();

    });


});


operand.forEach(button => {


    button.addEventListener('click', () => {


        cal.operations(button.innerText);
        cal.updateDisplay();
        cal.show_result();

    });


});


ans.addEventListener('click', button => {

    cal.process();
    cal.show_result();


});
allclear.addEventListener('click', button => {

    cal.clear();
    cal.show_result();


});

del.addEventListener('click', button => {

    cal.delete();
    cal.show_result();


});
p_i.addEventListener('click', button => {

    // cal.delete();
    //cal.process();
    cal.appendnum(Math.PI)
    cal.show_result();
    // console.log('hi');  


});
e_button.addEventListener('click', button => {
    cal.appendnum(Math.E)
    cal.show_result();
    //console.log('hi');



});

sqr_num.addEventListener('click', button => {
    // cal.appendnum()
    cal.sqr();
    cal.show_result();
    //console.log('hi');



});
divide_num.addEventListener('click', button => {
    // cal.appendnum()
    cal.divide();
    cal.show_result();
    //console.log('hi');



});

memory_mc.addEventListener('click', button => {
    cal.clearMemory();
});
memory_mr.addEventListener('click', button => {
    cal.re_call();
});
memory_m_minus.addEventListener('click', button => {
    cal.minus();
});
memory_mplus.addEventListener('click', button => {
    cal.added();
});
memory_ms.addEventListener('click', button => {
    cal.stored();
});

abs_num.addEventListener('click', button => {
    // cal.appendnum()
    cal.absolone_num();
    cal.show_result();
    //console.log('hi');



});
exp_num.addEventListener('click', button => {
    // cal.appendnum()
    cal.exponentional_num();
    cal.show_result();


});
sqrt_num.addEventListener('click', button => {
    // cal.appendnum()
    cal.sqrt();
    cal.show_result();
    //console.log('hi');



});

fact_num.addEventListener('click', button => {
    // cal.appendnum()
    cal.num_fact();
    cal.show_result();
    //console.log('hi');



}); 
