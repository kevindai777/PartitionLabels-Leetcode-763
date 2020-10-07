//Java Solution

class Solution {
    public List<Integer> partitionLabels(String S) {
        int[] charArr = new int[26];
        for (char i = 0; i < S.length(); i++) {
            charArr[S.charAt(i) - 'a'] = i;
        }
        
        int index = 0;
        int currIndex = 0;
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < S.length(); i++) {
            index = Math.max(index, charArr[S.charAt(i) - 'a']);
            System.out.println(index);
            
            if (i == index) {
                result.add(i - currIndex + 1);
                currIndex = i + 1;
            }
        }
        
        return result;
    }
}