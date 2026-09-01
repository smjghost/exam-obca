import { Database, Server, ShieldCheck, Activity, Layers, Terminal } from 'lucide-react';

export function QuickReferenceView() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. 核心默认端口速查 */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">核心组件默认端口速查表 (必考数值)</h3>
            <p className="text-xs text-slate-400 mt-0.5">单选/多选题最高频数字记忆考点</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/40">
                <th className="py-3 px-4 font-semibold">端口号</th>
                <th className="py-3 px-4 font-semibold">所属组件</th>
                <th className="py-3 px-4 font-semibold">端口类型</th>
                <th className="py-3 px-4 font-semibold">核心用途说明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-mono font-bold text-cyan-400">2881</td>
                <td className="py-3 px-4 font-semibold text-slate-200">OBServer</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs">SQL 端口</span></td>
                <td className="py-3 px-4">客户端/应用/驱动直连数据库的 MySQL/Oracle 协议监听端口</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-mono font-bold text-cyan-400">2882</td>
                <td className="py-3 px-4 font-semibold text-slate-200">OBServer</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 text-xs">RPC 端口</span></td>
                <td className="py-3 px-4">节点间内部远程调用、Paxos 事务日志同步复制、跨机执行与心跳探测</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-mono font-bold text-emerald-400">2883</td>
                <td className="py-3 px-4 font-semibold text-slate-200">OBProxy (ODP)</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs">代理业务端口</span></td>
                <td className="py-3 px-4">业务应用程序连接 OBProxy 代理的标准 SQL 访问端口</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-mono font-bold text-emerald-400">2884</td>
                <td className="py-3 px-4 font-semibold text-slate-200">OBProxy (ODP)</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-400 text-xs">代理管理端口</span></td>
                <td className="py-3 px-4">内部管理、Prometheus 监控指标抓取与健康探针探测</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-mono font-bold text-amber-400">8080</td>
                <td className="py-3 px-4 font-semibold text-slate-200">OCP</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-xs">Web 控制台</span></td>
                <td className="py-3 px-4">企业级云平台运维管控中心默认 Web 浏览器访问端口</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. 副本类型与权限矩阵 */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">三大副本类型 (F / R / L) 权限矩阵</h3>
            <p className="text-xs text-slate-400 mt-0.5">区分投票权、读写能力与数据构成</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/40">
                <th className="py-3 px-4 font-semibold">副本类型</th>
                <th className="py-3 px-4 font-semibold">数据内容</th>
                <th className="py-3 px-4 font-semibold">Paxos 投票权</th>
                <th className="py-3 px-4 font-semibold">读写能力</th>
                <th className="py-3 px-4 font-semibold">主要设计用途</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-bold text-rose-400">全功能型 (F 副本)</td>
                <td className="py-3 px-4">完整数据 (MemTable+SSTable) + 日志 (Clog)</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">✅ 具备投票权</td>
                <td className="py-3 px-4 text-slate-200">Leader 强读强写；Follower 弱读</td>
                <td className="py-3 px-4">标准高可用副本，可快速当选为 Leader</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-bold text-blue-400">只读型 (R 副本)</td>
                <td className="py-3 px-4">完整数据 + 异步回放事务日志</td>
                <td className="py-3 px-4 text-rose-400 font-bold">❌ 无投票权</td>
                <td className="py-3 px-4 text-slate-200">仅支持弱一致性读（只读）</td>
                <td className="py-3 px-4">承接报表分析读流量，不影响事务写延迟</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 font-bold text-amber-400">日志型 (L 副本)</td>
                <td className="py-3 px-4">仅持久化 Paxos 事务日志 (无数据)</td>
                <td className="py-3 px-4 text-emerald-400 font-bold">✅ 具备投票权</td>
                <td className="py-3 px-4 text-slate-400">❌ 完全不能提供读写</td>
                <td className="py-3 px-4">以极低存储成本充当第三方仲裁投票节点</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. 核心动态性能视图与日志文件 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 动态性能视图 */}
        <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">核心性能诊断视图速查</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-mono font-bold text-teal-400 mb-1">GV$OB_SQL_AUDIT</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                记录单次 SQL 调用的微秒级耗时明细（总耗时、CPU 耗时、排队耗时、网络耗时）与等待事件。<strong>不存执行计划树，不存查询结果集</strong>。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-mono font-bold text-teal-400 mb-1">GV$SQL_PLAN_MONITOR</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                算子级实时监控视图。用于精确下钻定位慢 SQL 到底慢在执行计划的哪一个算子（如 Hash Join 或 Table Scan）。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-mono font-bold text-teal-400 mb-1">GV$ACTIVE_SESSION_HISTORY (ASH)</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                活动会话历史采样视图。每秒自动快照活跃会话，支持在事后<strong>离线回溯诊断</strong>瞬时性能抖动与锁等待。
              </p>
            </div>
          </div>
        </div>

        {/* 核心日志文件分工 */}
        <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">OBServer 核心日志文件矩阵</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-mono font-bold text-violet-400 mb-1">observer.log / observer.log.wf</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                OBServer 进程主系统运行日志。`.wf` 专门用于单独过滤记录 Warning 及 Fatal 级别的告警信息。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-mono font-bold text-violet-400 mb-1">trace.log</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                专门记录<strong>全链路追踪 (Full Link Trace)</strong> 相关 Span、Tag 及跨组件调用耗时树。
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-mono font-bold text-violet-400 mb-1">election.log & rootservice.log</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                `election.log` 记录 Paxos 多副本选举事件；`rootservice.log` 记录总控服务 DDL 与集群调度事件。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 生态周边工具与进程全貌 */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 lg:p-8 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">生态工具链与 OCP 核心三进程</h3>
            <p className="text-xs text-slate-400 mt-0.5">工具职责边界与 Agent 进程分工</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">ocp_agentd</span>
            <h4 className="font-bold text-slate-200 mt-2 mb-1">守护进程 (Daemon)</h4>
            <p className="text-slate-400 text-xs leading-relaxed">管理、监控并拉起其他两个子进程，负责 Agent 自身升级与健康自愈。</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">ocp_mgragent</span>
            <h4 className="font-bold text-slate-200 mt-2 mb-1">运维管理进程 (Manager)</h4>
            <p className="text-slate-400 text-xs leading-relaxed">接收并执行 OCP Server 下发的安装、启动、停止、升级与参数修改等运维指令。</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">ocp_monagent</span>
            <h4 className="font-bold text-slate-200 mt-2 mb-1">监控采集进程 (Monitor)</h4>
            <p className="text-slate-400 text-xs leading-relaxed">周期性采集主机硬件（CPU/内存/IO）与数据库性能指标，上报至 MetaDB。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
