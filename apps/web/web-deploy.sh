#!/bin/bash

#!/bin/bash

# 执行命令获取3000端口相关进程信息
ss_result=$(sudo ss -tulnp | grep :3000)

# 判断是否有进程占用3000端口
if [ -n "$ss_result" ]; then
    # 从输出中提取PID（利用awk按分隔符解析）
    pid=$(echo "$ss_result" | awk -F'pid=' '{print $2}' | awk -F',' '{print $1}')
   kill -9 $pid
    echo "占用3000端口的进程PID为：$pid"
else
    echo "3000端口当前无进程占用"
fi












nohup pnpm dev > output.log 2>&1 &

# 完成提示
echo -e "\n=== 执行完毕 ==="
