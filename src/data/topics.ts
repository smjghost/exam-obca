import { ObcaTopic } from '../types';

export const obcaTopics: ObcaTopic[] = [
  {
    id: 'overview',
    title: '认证与考试大纲 (V4.0)',
    shortTitle: '考试大纲',
    iconName: 'Award',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/30',
    description: 'V4.0 考试题型分值、原生分布式内核定位与商业版/社区版差异',
    sections: [
      {
        type: 'high-freq',
        title: 'V4.0 考试形式与分值规范',
        content: '**考试形式**：OBCA (OceanBase Certified Associate) 为**纯理论客观题考试，无实操题**。\n**分值规则**：总分 100 分（通常为 50 道客观题，包含单选题、多选题、判断题），及格线为 60 分。\n**监考环境**：线上闭卷，全程开启摄像头进行人脸识别与视频监控。'
      },
      {
        type: 'high-freq',
        title: '产品定位：原生分布式与 HTAP 双冠王',
        content: '**原生分布式**：完全自主研发的 Shared-Nothing（无共享）架构，分布式事务、路由、Paxos 多数派共识协议均在内核引擎层原生实现，**绝不依赖任何分库分表分布式中间件**。\n**HTAP 统一引擎**：一套引擎同时支撑高并发 OLTP 事务与实时 OLAP 分析处理。曾两次打破 **TPC-C** 世界纪录（高达 7.07 亿 tpmC），并登顶 **TPC-H** 分析测试世界纪录（1526 万 QphH）。'
      },
      {
        type: 'comparison',
        title: '商业版 (企业版) vs 社区版 (开源版)',
        content: '**核心分布式架构一致**：社区版与企业版同源同内核，底层 LSM-Tree、Paxos 多数派复制、2PC 分布式事务与高可用指标（RPO=0, RTO<8s）完全一致。\n**主要核心差异**：\n1. **兼容模式**：商业版同时支持 **MySQL 模式** 和 **Oracle 模式**；社区版**仅支持 MySQL 模式**。\n2. **企业级周边套件**：商业版包含闭源的高级企业版 OCP、OMS、企业级技术支持 SLA 服务保障。'
      },
      {
        type: 'trap',
        title: 'DBA 日常工作职责边界 (真题易错点)',
        content: '**属于 DBA 日常运维**：集群安装部署规划、参数配置调优、租户资源（CPU/内存）扩缩容、物理备份与恢复、故障应急切主、大合并调优等。\n**不属于 DBA 日常范畴**：**应用业务 SQL 改写与重构**（这是应用研发人员的职责，DBA 仅提供索引建议或诊断支持）。'
      }
    ]
  },
  {
    id: 'architecture',
    title: '集群架构与部署规范',
    shortTitle: '集群架构',
    iconName: 'Server',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
    description: 'Zone 概念、对等 OBServer、RootService、默认端口与生产环境要求',
    sections: [
      {
        type: 'high-freq',
        title: 'Zone 与 OBServer 节点特性 (必考)',
        content: '**Zone 的本质**：Zone 是纯**逻辑概念**（通常映射为一个物理机房、机架或云可用区 AZ），用于划分物理故障隔离域。**Zone 不会自动绑定城市**，需人工规划。\n**OBServer 全对称**：所有 OBServer 节点在物理层面完全对等（全对称架构），运行完全相同的二进制程序镜像，兼备计算（SQL 引擎）与存储（存储引擎）能力。\n**异构部署**：Zone 内部或不同 Zone 之间**不限制服务器硬件必须相同**，支持不同 CPU/内存规格的服务器混部，平滑扩缩容。'
      },
      {
        type: 'high-freq',
        title: '核心组件默认端口速记 (常考数值)',
        content: '**1. OBServer 节点**：\n• **2881**：客户端/应用/驱动直连的 SQL 协议监听端口\n• **2882**：节点间内部 RPC 通信端口（用于 Paxos 复制、跨机执行、心跳）\n**2. OBProxy 代理**：\n• **2883**：业务应用连接代理的标准 SQL 监听端口\n• **2884**：代理内部监控/探针管理端口 (Prometheus/RPC)\n**3. OCP 管控平台**：\n• **8080**：Web 图形化管理控制台默认访问端口'
      },
      {
        type: 'high-freq',
        title: 'RootService (总控服务) 的核心职责',
        content: '**概念**：RS 是运行在 **sys 租户 Leader 节点**上的轻量级逻辑服务（无独立进程），依靠 Paxos 协议保证高可用。\n**全局单 Leader**：整个集群在任何时刻**有且仅有一个**处于激活状态的 RS Leader。\n**四大核心职责**：\n1. **集群拓扑与心跳管理**：监控 OBServer 节点上下线与健康状态。\n2. **资源与租户调度**：管理 Unit 规格、Resource Pool 分配及租户生命周期。\n3. **全局 Schema 与 DDL**：驱动并分发建库建表等 DDL 元数据变更。\n4. **负载均衡与大合并管理**：调度数据分片均衡，发起并协调每日大合并。\n**不负责的内容**：**不负责 SQL 路由**（由 OBProxy 负责），**不存储普通用户业务数据**，**不进行数据加密**。'
      },
      {
        type: 'formula',
        title: '生产环境部署前置四大要求',
        content: '1. **时钟同步 (NTP/Chrony)**：各 OBServer 节点之间 RPC **时钟偏差必须 < 100ms**（过大会引发分布式事务判定异常与租约失效）。\n2. **内存交换分区 (Swap)**：生产环境**必须关闭 Swap**（swapoff -a 或 vm.swappiness=0），防止内存页换出造成线程卡死和心跳超时。\n3. **文件句柄数**：推荐设置 ulimit -n ≥ 655350 与 nproc ≥ 655350，支撑高并发连接与日志描述符。\n4. **操作系统与用户**：仅支持在 **64位 Linux** 上部署（支持 x86/ARM/信创 UOS 麒麟），必须使用普通用户 **admin** 运行，严禁 root 直接启动。'
      },
      {
        type: 'trap',
        title: 'OBServer 工作目录与磁盘规划划分',
        content: '• `/home/admin/oceanbase`：默认安装工作目录，下含 `bin`（二进制文件）、`etc`（配置文件 `observer.config.bin`）、`log`（所有运行日志）、`audit`（审计日志）。\n• `/data/log1`：**事务日志盘 (Clog)**，对写入延迟极度敏感，**必须独立挂载在高性能 SSD/NVMe 磁盘**。\n• `/data/1`：**数据盘 (SSTable/block_file)**，存放基线数据，需独立大容量磁盘挂载。\n• `/root`：系统超级用户目录，**可以不单独划分磁盘**。'
      }
    ]
  },
  {
    id: 'ha',
    title: '高可用与日志流 (V4.x)',
    shortTitle: '高可用容灾',
    iconName: 'ShieldCheck',
    color: 'text-rose-400',
    bgColor: 'bg-rose-400/10',
    borderColor: 'border-rose-400/30',
    description: 'RPO=0/RTO<8s、V4 日志流架构、副本 F/R/L 权限与典型容灾拓扑',
    sections: [
      {
        type: 'high-freq',
        title: '金融级高可用与 Paxos 多数派机制',
        content: '**核心指标**：\n• **RPO = 0**（零数据丢失）：事务提交只需 Multi-Paxos 多数派（如 3 副本中的 2 个，5 副本中的 3 个）落盘确认即可成功。\n• **RTO < 8 秒**：少数派节点宕机时，存活的多数派在秒级内自动通过 Paxos 重新选主恢复读写，业务无感知。\n**单主模型**：任何时刻写操作**必须且只能由 Leader 处理**，Follower 不能直接写，只能提供弱一致性读。'
      },
      {
        type: 'high-freq',
        title: 'V4.x 日志流 (Log Stream) 架构演进 (重大考点)',
        content: '**V3.x (老版本)**：以**分区 (Partition)** 为单位组建 Paxos 组，单机百万分区会导致 Paxos 心跳和线程爆炸。\n**V4.x (新架构)**：引入**日志流 (Log Stream, LS)**。\n• **多对一映射**：多个数据分片（Tablet / 分区）聚合归属到同一个日志流中。\n• **Paxos 同步与选举的基本单位升级为日志流**，数据分片退化为纯数据组织，不再独立参与 Paxos 投票。\n• **收益**：大幅收敛心跳开销，单机支持百万级分片。'
      },
      {
        type: 'comparison',
        title: '三大主要副本类型 (F / R / L) 对比',
        content: '| 副本类型 | 包含数据 (Mem/SSTable) | 包含日志 (Clog) | Paxos 投票权 | 能否当选 Leader |\n| :--- | :---: | :---: | :---: | :---: |\n| **全功能型 (F)** | ✅ 完整数据 | ✅ 完整日志 | ✅ 有投票权 | ✅ 可当选主提供读写 |\n| **只读型 (R)** | ✅ 完整数据 | ✅ 异步回放日志 | ❌ 无投票权 | ❌ 不可当主 (专供弱读) |\n| **日志型 (L)** | ❌ 无数据 | ✅ 完整日志 | ✅ 有投票权 | ❌ 不可当主 (降成本仲裁) |\n*注：单个日志流在同一个 Zone 内部最多只能有 1 个 Paxos 副本（全功能 F 或日志 L）。*'
      },
      {
        type: 'trap',
        title: '典型容灾场景与两地三中心故障推演',
        content: '**两地三中心 (3 Zone: 2 同城 + 1 异地)**：\n• **正常运行**：写操作只需本地 Leader + 同城 Follower 共 2 票确认，延迟为同城毫秒级。\n• **同城一个机房宕机后**：剩下 1 同城 + 1 异地副本，仍满足多数派（2/3），**集群可用且数据零丢失 (RPO=0)**，但因必须等待跨城网络确认，**强一致写同步延迟明显变大**。\n• **容错公式**：N 副本集群最多容忍 (N-1)/2 个节点故障（5 节点集群最多允许 2 个节点同时故障）。'
      },
      {
        type: 'knowledge',
        title: '物理备份与恢复机制 (PITR)',
        content: '物理备份由两部分协同构成：\n1. **数据备份**：备份静态基线数据宏块/SSTable（支持全量备份与增量备份）。\n2. **日志归档**：流式持续将事务日志 (Clog) 自动归档到备份介质（NFS/OSS/COS 等）。\n**PITR 恢复**：先还原基线数据快照，再连续回放增量归档日志，可将租户精确恢复到历史任意时间点。'
      }
    ]
  },
  {
    id: 'storage',
    title: 'LSM-Tree 存储与极致压缩',
    shortTitle: 'LSM-Tree 存储',
    iconName: 'Database',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    description: '读写分离、转储与大合并、两级压缩技术、Tombstone 标记与多级缓存',
    sections: [
      {
        type: 'high-freq',
        title: '读写分离与准内存架构 (Quasi-in-Memory)',
        content: '**内存增量 (MemTable)**：所有 DML 增删改操作直接在内存 MemTable 中完成，追加写 Clog 保障持久化，避免随机磁盘写，具备纯内存级写性能。\n**磁盘基线 (SSTable)**：基线数据存放于磁盘 SSTable，**只读且不可变 (Immutable)**。\n**硬件友好**：将传统数据库的随机覆写转化为纯内存写与磁盘批量顺序追加写，彻底消除写放大，显著延长 SSD 寿命。'
      },
      {
        type: 'comparison',
        title: '转储 (Minor) vs 大合并 (Major) 深度辨析',
        content: '**转储 (Minor Compaction / Dump)**：\n• **目标**：快速释放内存 MemTable 空间，防止内存耗尽。\n• **行为**：将冻结的 MemTable 刷入磁盘生成 Minor SSTable，**不清除历史失效版本**。\n• **触发**：内存达到 freeze_trigger_percentage (约70%) 阈值自动触发，或单节点本地手动触发。\n\n**大合并 (Major Compaction / 每日合并)**：\n• **目标**：全局多路归并、**物理清理删除标记与过期多版本、释放磁盘空间**、两级压缩。\n• **行为**：将所有增量 SSTable 与旧基线 SSTable 归并生成全新的静态基线 SSTable。\n• **触发**：每天业务低峰期定时（major_freeze_duty_time="02:00"）或管理员手动触发。'
      },
      {
        type: 'high-freq',
        title: '两级压缩技术 (推荐 2 次压缩)',
        content: 'OceanBase 在大合并写入基线数据时采用独创的两级压缩机制：\n1. **第一次：高级编码 (Encoding)**：在微块 (Micro Block) 内部根据字段特征自适应采用字典编码 (Dictionary)、前缀编码 (Prefix)、差分编码等。**支持在不解压的情况下直接在内存中下推过滤计算**。\n2. **第二次：通用压缩 (General Compression)**：送入 LZ4 / zstd / Snappy 等通用算法二次压缩。\n**收益**：综合压缩率高达 **70%~90% (3~5倍)**，存储成本远低于传统单副本数据库。'
      },
      {
        type: 'trap',
        title: 'DELETE 操作与全表扫描机制 (真题陷阱)',
        content: '• **DELETE 的真实机制**：执行 DELETE 时**绝不会立刻擦除磁盘数据**，而是向 MemTable 写入一条**墓碑标记 (Tombstone / Delete Marker)**。只有在**大合并 (Major Compaction)** 时才会真正物理清理并释放磁盘空间。\n• **全表扫描 (Merge on Read)**：查询数据时，SQL 引擎必须同时扫描磁盘只读基线 (SSTable) 和内存增量 (MemTable)，并在内存中进行**实时多版本归并**，确保读取到最新数据。支持通过并行执行 (PX) 多节点并行扫描。'
      },
      {
        type: 'knowledge',
        title: '多级缓存体系 (KVCache & Plan Cache)',
        content: '• **BlockCache**：缓存磁盘上的**数据微块 (Micro Block)**，减少物理磁盘 I/O，加速高频数据读取。\n• **RowCache**：缓存行级数据，针对主键点查场景提供极速命中。\n• **Plan Cache (执行计划缓存)**：缓存参数化 SQL 的物理执行计划，**避免重复硬解析 (Hard Parse)**，降低 CPU 消耗。'
      }
    ]
  },
  {
    id: 'transaction',
    title: '分布式事务与表组调优',
    shortTitle: '分布式事务',
    iconName: 'Activity',
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10',
    borderColor: 'border-violet-400/30',
    description: '2PC 协调者无状态、GTS+MVCC、3 种隔离级别与 Tablegroup 表组对齐',
    sections: [
      {
        type: 'high-freq',
        title: '两阶段提交 (2PC) 与协调者无状态化',
        content: '**为什么采用 2PC**：当事务涉及跨节点/跨日志流的多个分区修改时，依靠 2PC 保证分布式事务的**原子性 (Atomicity)**，所有参与者要么全部提交，要么全部回滚。\n**谁是协调者**：发起事务提交的日志流 Leader 所在的 OBServer 自动充当协调者。\n**协调者无状态化 (Stateless)**：协调者自身**不写 Paxos 日志**。若协调者宕机，新协调者直接向参与者反向查询持久化的 Paxos 状态即可推导恢复决议，消除了单点挂起与额外 I/O 延迟。'
      },
      {
        type: 'high-freq',
        title: 'MVCC + 全局时间戳 (GTS) 机制',
        content: '**解决读写冲突**：采用 MVCC（多版本并发控制），写生成新版本，读按快照版本读取，实现**读写互不阻塞、读不加锁**；写写冲突使用行级排他锁 (Row Lock) 与锁队列。\n**全局时间戳 (GTS)**：在分布式环境下为每个事务颁发单调递增的逻辑时间戳，解决各节点时钟漂移，提供全局一致性快照读基准。'
      },
      {
        type: 'knowledge',
        title: '支持的事务隔离级别 (必考)',
        content: 'OceanBase 支持 3 种标准事务隔离级别：\n1. **读已提交 (Read Committed)**：MySQL 与 Oracle 模式的**默认隔离级别**。\n2. **可重复读 (Repeatable Read)**：MySQL 模式完整支持。\n3. **串行化 (Serializable)**：MySQL 与 Oracle 模式均原生支持。\n**重点陷阱**：OceanBase **不支持读未提交 (Read Uncommitted)**，因为其无法保证金融级一致性。'
      },
      {
        type: 'high-freq',
        title: '表组 (Tablegroup) 与分区对齐规则',
        content: '**核心作用**：将业务上强关联（经常 Join 或一同修改）的多张表或分区调度聚集在**同一台物理 OBServer 节点 (Colocation)**。\n**两大性能收益**：\n1. **消除分布式事务**：跨表多分区修改转化为单机本地事务，避免 2PC 开销。\n2. **加速复杂关联查询**：将分布式 Join 优化为本地 **Partition-Wise Join**，消除跨机网络重分布。\n**SHARDING 规则**：\n• `SHARDING=\'PARTITION\'`：要求表组内所有表具有**相同的一级分区方式、相同的分区数量及完全一致的分区边界**。\n• 表组归属具体租户，**严禁跨租户存在**。支持非分区表加入表组。'
      },
      {
        type: 'trap',
        title: '支持的分区类型与主键约束',
        content: '• **一级分区类型**：**Range (范围)**、**List (列表)**、**Hash (哈希)** 以及 **Key (键值，MySQL 模式专属)**。\n• **二级组合分区**：支持 Range/List/Hash 的两两自由组合（如 Range+Hash）。\n• **主键约束特性**：主键必须非空（NOT NULL）且全局唯一。如果用户建表未显式定义主键，系统会自动创建隐藏自增列 `__pk_increment` 作为隐藏主键，按索引组织表存储。'
      }
    ]
  },
  {
    id: 'tenant',
    title: '多租户管理与资源计算',
    shortTitle: '多租户管理',
    iconName: 'Cpu',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    description: 'Unit Num 计算公式、独占/共享隔离边界、V4 租户分类与 sys 管理',
    sections: [
      {
        type: 'formula',
        title: '租户 Unit Num 与服务器数量计算公式 (核心高频算术题)',
        content: '**UNIT_NUM 的定义**：指在**每一个 Zone 内部**所分配的资源单元 (Unit) 数量，而不是全局总数。\n**单机单 Unit 互斥原则**：同一个租户在同一台 OBServer 节点上最多只能分配 1 个 Unit（1 节点 ≥ 1 Unit）。\n\n**黄金计算公式**：\n• 集群中承载该租户的服务器总数 = Zone 数量 × UNIT_NUM\n• 单 Zone 所需的最小 OBServer 数量 ≥ UNIT_NUM\n*示例：3 个 Zone，每个 Zone 5 台 OBServer，租户 Unit Num=4，则该租户总共占用 3 × 4 = 12 台节点。*'
      },
      {
        type: 'comparison',
        title: '多租户各类资源隔离机制全景 (必考)',
        content: '1. **内存 (Memory)**：**严格独占分配，不可超卖，不支持租户间借用**。租户内存耗尽会触发报错或限流，但绝不影响其他租户。\n2. **CPU 资源**：**配额划分，支持超卖**。通过 `MIN_CPU`（保底）和 `MAX_CPU`（上限）配置，空闲时弹性突发，竞争时保障保底算力。\n3. **IOPS / 磁盘 I/O**：通过底层异步 I/O 调度队列与权重进行限速隔离。\n4. **数据磁盘 (Disk)**：**共享同一物理磁盘及 block_file 大文件**，逻辑划分存储配额，硬件上不物理隔离。'
      },
      {
        type: 'high-freq',
        title: 'OceanBase V4.x 租户分类与角色',
        content: '1. **系统租户 (sys 租户)**：集群启动时内置创建，负责全集群拓扑、节点管理、租户生命周期管理（创建/删除/扩缩容租户）与修改集群级参数（`ALTER SYSTEM`）。**sys 租户不能随意读取和篡改普通租户的业务表数据**。\n2. **用户租户 (User Tenant)**：承载业务，支持 MySQL 兼容模式与 Oracle 兼容模式。\n3. **Meta 租户 (`META$xxx`)**：V4.x 核心新特性，与每个用户租户 1:1 伴生，专职私有管理该租户的元数据与日志流状态。'
      },
      {
        type: 'knowledge',
        title: '租户登录连接格式与创建步骤',
        content: '**登录格式规范**：\n• **直连 OBServer**：`用户名@租户名`（例如 `root@sys` 或 `app_user@tenant_order`）\n• **通过 OBProxy 连接**：`用户名@租户名#集群名`（例如 `root@sys#obcluster`）\n\n**创建新业务的标准四步法**：\n1. `CREATE RESOURCE UNIT`（创建资源单元规格）\n2. `CREATE RESOURCE POOL`（创建资源池，绑定 Unit、Zone 和 UNIT_NUM）\n3. `CREATE TENANT`（创建独立租户，绑定资源池）\n4. 登录租户执行 `CREATE USER` → `CREATE DATABASE` → `CREATE TABLE`。'
      }
    ]
  },
  {
    id: 'tools',
    title: '生态工具链矩阵 (OCP/OMS/ODC/OBD)',
    shortTitle: '生态工具链',
    iconName: 'Layers',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
    borderColor: 'border-indigo-400/30',
    description: 'OCP 管控、OMS 迁移、OMA 评估、ODC 开发者中心与 OBLOADER/OBDUMPER',
    sections: [
      {
        type: 'comparison',
        title: '周边工具职能矩阵速查 (高频定位考点)',
        content: '| 工具名称 | 全称与定位 | 核心能力与适用场景 |\n| :--- | :--- | :--- |\n| **OCP** | OceanBase Cloud Platform 云平台 | 集中运维管控平台：集群/租户创建、按 Zone 滚动升级、监控告警、备份恢复、参数配置 |\n| **OMS** | OceanBase Migration Service 数据传输 | 一站式数据迁移与**实时同步**：结构迁移 + 全量迁移 + 增量实时 CDC + 一致性校验 + 反向回滚同步 |\n| **OMA** | OceanBase Migration Assessment 迁移评估 | **迁前兼容性评估**：扫描源端对象与 SQL，评估兼容度并给出改写建议（**本身不执行数据迁移**） |\n| **ODC** | OceanBase Developer Center 开发者中心 | 数据库开发平台：Web/桌面版编写 SQL、PL/SQL 存储过程调试、Schema 管理、数据导入导出 |\n| **OBD** | OceanBase Deployer 安装部署器 | 命令行快速安装部署：通过 YAML 配置文件自动化预检、部署与启停集群组件 |\n| **OAT** | OceanBase Admin Toolkit 运维工具箱 | 敏捷交付运维工具：用于专有云环境下部署 OCP、OMS 等平台组件自身 |'
      },
      {
        type: 'high-freq',
        title: 'OCP 架构核心深度考点',
        content: '1. **MetaDB 依赖**：OCP、OMS、ODC (企业版) 运行必须依赖专用的 **MetaDB 租户**持久化元数据；**OBProxy (无状态) 和 OAT 不需要 MetaDB**。\n2. **OCP Agent 三大核心进程**：\n• `ocp_agentd`：守护进程（主进程，管理与监控另外两个子进程，负责自愈升级）\n• `ocp_mgragent`：运维管理进程（接收并执行 OCP Server 下发的安装、启动、升级等运维指令）\n• `ocp_monagent`：监控采集进程（周期性采集主机与数据库性能指标上报）\n3. **四大告警通道**：钉钉群机器人 Webhook、电子邮件 (SMTP)、手机短信 (SMS)、自定义 HTTP API 回调。\n4. **OCP 不能做的事**：**不能升级物理硬件**（如物理加内存条，这属于硬件/云平台层工作）。'
      },
      {
        type: 'trap',
        title: '专用导数工具 vs 内核 LOAD DATA 命令',
        content: '• **独立专用客户端导数工具**：\n- **OBLOADER**：Java 开发的高性能命令行导入工具（支持 CSV/SQL/TXT，多线程并发）。\n- **OBDUMPER**：Java 开发的高性能命令行导出工具。\n- **ODC**：提供图形化导入/导出向导。\n• **内核 SQL 命令 (LOAD DATA)**：\n- 当导入存放在某台 OBServer 本地服务端的文件时，**客户端必须直连该 OBServer 节点，绝不能通过 OBProxy 连接**（避免路由到无文件的其他节点导致报错）。\n- 旁路导入 Hint `/*+ direct */` 是性能优化选项，非普通本地导入的必需语法。'
      }
    ]
  },
  {
    id: 'diagnostics',
    title: '性能监控与 SQL 诊断视图',
    shortTitle: '监控诊断',
    iconName: 'Eye',
    color: 'text-teal-400',
    bgColor: 'bg-teal-400/10',
    borderColor: 'border-teal-400/30',
    description: 'SQL_AUDIT、ASH/WR 离线诊断、EXPLAIN 计划语法、日志文件与闪回技术',
    sections: [
      {
        type: 'high-freq',
        title: '核心动态性能诊断视图全景',
        content: '1. **`GV$OB_SQL_AUDIT` (全局 SQL 审计视图)**：记录单次 SQL 执行的微秒级耗时画像（`ELAPSED_TIME` 总耗时、`EXECUTE_TIME` 执行耗时、`QUEUE_TIME` 排队耗时、`CPU_TIME`）及等待事件（`EVENT`、`TOTAL_WAIT_TIME_MICRO`）。\n*注意：该视图**不包含完整的执行计划树**，**出于合规安全绝对不保存 SQL 查询结果集**。*\n2. **`GV$SQL_PLAN_MONITOR`**：算子级别的实时监控视图，精确定位慢 SQL 具体卡在哪个算子（如 Hash Join 或 Table Scan）。\n3. **`GV$ACTIVE_SESSION_HISTORY` (ASH)**：活动会话历史采样，每秒采样活跃会话，用于**事后离线回溯诊断**系统瞬时资源瓶颈与锁等待。'
      },
      {
        type: 'high-freq',
        title: 'EXPLAIN 命令语法与执行计划',
        content: '• **`EXPLAIN BASIC`**：仅输出最简计划骨架（算子 ID 与表名，无代价估算）。\n• **`EXPLAIN` (默认)**：标准计划（包含预估行数 EST. ROWS 与 COST 代价）。\n• **`EXPLAIN EXTENDED`**：最详尽的执行计划（包含表达式内存地址、过滤条件详情、分区扫描 Range）。\n• **`EXPLAIN OUTLINE`**：输出生成该计划所对应的 Hint 提示（Outline 数据）。\n*陷阱提示：EXPLAIN 查看的是优化器预估计划，真实物理执行需结合 SQL Plan Monitor 或 Plan Cache 视图。*'
      },
      {
        type: 'comparison',
        title: 'OBServer 核心日志文件分工矩阵',
        content: '| 日志文件名 | 核心记录内容与用途 |\n| :--- | :--- |\n| **`observer.log`** | OBServer 进程的主系统运行日志，记录内核常规信息、错误告警等 |\n| **`observer.log.wf`** | 专门记录 Warning 及 Fatal 级别的系统告警日志 |\n| **`election.log`** | 专门记录 Paxos 多副本分布式选举与切主事件日志 |\n| **`trace.log`** | 专门记录**全链路追踪 (Full Link Trace)** 相关的 Span 与各组件调用耗时 |\n| **`rootservice.log`** | 专门记录 RootService 进行集群调度、DDL 处理与容灾均衡事件 |'
      },
      {
        type: 'trap',
        title: '闪回技术 (Flashback) 与数据快速自愈',
        content: '**闪回原理**：基于 MVCC 多版本数据保留机制（由租户参数 `undo_retention` 控制）。\n• **闪回查询 (Flashback Query)**：通过 `AS OF TIMESTAMP` 或 `AS OF SCN` 语法，可直接查询历史快照并瞬间抢救误删数据。\n• **闪回整表 (Flashback Drop/Truncate)**：利用回收站 (Recyclebin)，通过 `FLASHBACK TABLE <table> TO BEFORE DROP;` 秒级还原被误删的表结构与索引。\n**优势**：相比耗时的“物理备份+日志重放”，闪回技术可在数秒内完成人为误操作抢救，大幅压降 RTO。'
      }
    ]
  }
];
