import java.util.*;

import javax.lang.model.util.ElementScanner14;
public class Main{

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String exp = sc.nextLine();
        System.out.println(duplicateBrackets(exp));
    }

    public static boolean duplicateBrackets(String exp) {
        Stack<Character> st = new Stack<>();
        for(int i=0; i<exp.length(); i++)
        {
            char ch = exp.charAt(i);

            if(ch == ' ')
            {
                continue;
            }
            else if(ch == ')')
            {
                if(st.peek() == '(')
                {
                    return true;                    
                }
                else
                {
                    while(st.peek() != '(')
                    {
                        st.pop();
                    }
                }
                st.pop();
            }
            else
            {
                st.push(ch);
            }
        }
        return false;
    }      
}