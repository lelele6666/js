let s1 = "get-element-by-id";

export default function f(s){
    return s.replace(/-\w/g, function(x) {
                return x.slice(1).toUpperCase();
            })
}
