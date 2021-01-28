<template>
  <panel>
    <div slot="title">{{ $t("Java 기본 입출력 예제 코드") }}</div>
    <div class="content markdown-body">
      <ul>
        <li>
            속도가 느리지만 구현하기 간편한 Scanner / println 입니다.
        </li>
        <li>
            Scanner 는 엔터와 띄어쓰기를 구분하지 않고 입력 받을 수 있습니다.
        </li>
        <li>
           println 은 "sysout" 입력 후 "Alt + Space" 를 누르면, 자동완성이 됩니다.
        </li>

        <p>Scanner로 수 2개 입력 받기</p>
        <pre>
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input1 = sc.nextInt();
        int input2 = sc.nextInt();
        System.out.println(input1 + " : " + input2);
    }
}
        </pre>
        <p>Scanner로 문자열 2개 입력 받기</p>
        <pre>
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input1 = sc.next();
        String input2 = sc.next();            
        System.out.println(input1 + " : " + input2);
    }
}
        </pre>
        <p>삼성 Pro / B형 대비를 위한, 더 빠른 입출력</p>
        10만개가 넘어가는 Data를 빠른 속도로 입력 / 출력 받기 위해서는<br>
        Scanner / println 대신BufferedReader / BufferedWriter 를 사용해야합니다.<br>
        구현이 까다롭고, 불편하기에 많은 연습이 필요합니다.<br>
        <p>BufferedReader / Writer 예제</p>

        <li>
            다음은 수 하나를 입력 받고, + 5 값을 출력하는 예시입니다.
        </li>
        <li>
            br.readLine()를 사용하면 한줄 String을 입력 받을 수 있습니다.
        </li>
        <li>
           입력을 받은 후 int type으로 변환을 해야합니다.
        </li>
        <li>
           출력을 할 때는 int type을 바로 출력할 수 없습니다. String 형으로 변환 후 출력해야 합니다.
        </li>
        <p>입력예시</p>
        <br>
        ABCDEF<br>
        5
        <br>
        <br>
        <p>출력예시</p>
        <br>
        ABCDEF<br>
        10
        <br>
                <pre>
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        //문자열 한 줄 입력받기
        String str = br.readLine();
        bw.write(str + "\n");

        //br.readLine 으로 한줄 입력받은 후, int형으로 변환
        int n = Integer.parseInt(br.readLine());                
        n += 5;
        bw.write(n + ""); //String 형으로 변환을 위해 + "" 를 덧붙임

        br.close();
        bw.close();
    }    
}
        </pre>
        <p>BufferedReader 의 불편한 점</p>
        엔터와 띄어쓰기를 구분해야 합니다.<br>
        예를들어<br>
        <br>
        1 2 3
        <br>
        <br>
        띄어쓰기로 구분되어있는 데이터 입력 방법과<br>
        <br>
        1<br>
        2<br>
        3<br>
        <br>
        <br>
        개행(엔터)로 구분 되어있는 데이터 입력 방법이 서로 다릅니다.<br>
        띄어쓰기로 구분되어 있는 경우<br>

                        <pre>
import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        //한 줄에 수 3개 입력받는 경우        
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        br.close();
        bw.close();
    }    
}
        </pre>
        <br>
        엔터로 구분되어 있는 경우
        <pre>
엔터로 구분되어 있는 경우

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        //한줄에 수 하나만 입력 될 경우
        int a = Integer.parseInt(br.readLine());                
        int b = Integer.parseInt(br.readLine());                
        int c = Integer.parseInt(br.readLine());                

        br.close();
        bw.close();
    }    
}
        </pre>
        <br>
        1 차원 배열에 N개의 수 입력받기 예시
        <pre>
import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        //입력 예시
        //5
        //1 2 3 4

        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];

        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        br.close();
        bw.close();
    }    
}
        </pre>
        <br>
        2차원 배열에 수 입력받기 예시
        <pre>
import java.io.*;
import java.util.StringTokenizer;

public class Main { public static void main(String[] args) throws IOException{

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    //입력 예시
    //3 4 (height x width)
    //1 2 3 4
    //4 3 4 1
    //5 5 5 1

    StringTokenizer st = new StringTokenizer(br.readLine());
    int height = Integer.parseInt(st.nextToken());
    int width= Integer.parseInt(st.nextToken());

    int[][] arr = new int[height][width];
    for (int y = 0; y < height; y++) {
        st = new StringTokenizer(br.readLine());
        for (int x = 0; x < width; x++) {
            arr[y][x] = Integer.parseInt(st.nextToken());
        }
    }

    br.close();
    bw.close();
}        
    </pre>
        

      </ul>
    </div>
  </panel>
</template>

<script></script>

<style lang="less" scoped>
.content {
  font-size: 16px;
  margin: 0 50px 40px 50px;
  > ul {
    list-style: disc;
    li {
      font-size: 16px;
      margin-top: 5px;
      &:first-child {
        margin-top: 0;
      }
    }
    p {
        font-size: 16px;
        margin-top: 5px;
        font-weight: 700;
        }
  }
  .c-wrapper{
    margin-top: 40px;
    display: flex ;
    align-items: flex-start;
  }
  .c-wrapper img{
    display: inline-block;
    
  }
  .c-wrapper img:nth-of-type(2){
    margin-left: 50px;
  }
}
</style>
