import { ExamQuestion } from '../../types';

export const multiChoiceQuestions: ExamQuestion[] = [
  {
    id: 90,
    questionNumber: 1,
    type: '多选题',
    question: '关于使用 LOAD DATA 命令导入数据，下列说法错误的是（ ）',
    options: [
      'A. 客户端使用 OBProxy 连接数据库执行 LOAD DATA 命令，把 OceanBase 集群中一台 OBServer 节点上的 CSV 文件导入到数据库中',
      'B. 使用 LOAD DATA 命令前，需要授予该文件给数据库的读取权限',
      'C. LOAD DATA 支持本地路径和远程路径两种方式',
      'D. LOAD DATA 使用本地路径时，必须强制指定 direct 关键字的 Hint'
    ],
    answer: 'A, D',
    analysis: 'A 项错误：当导入存放在某台 OBServer 本地服务端的文件时，客户端必须直连该 OBServer 节点，绝不能通过 OBProxy（避免被路由到无文件的其他节点导致报错）；D 项错误：/*+ direct */ 旁路导入是性能优化选项，不是普通本地导入的强制必需语法。',
    topicId: 'tools',
    tags: ['LOAD DATA', 'OBProxy路由避让', '旁路导入']
  },
  {
    id: 91,
    questionNumber: 2,
    type: '多选题',
    question: '关于 OceanBase V4 的负载均衡机制，下列说法正确的是（ ）',
    options: [
      'A. 用户可以直接指定分区所在的物理 OBServer 节点绝对位置',
      'B. 用户可以使用表组（Tablegroup）来影响负载均衡，让业务上有关联关系的 Table、Partition 在物理分布上有亲和性',
      'C. 自动负载均衡会将 Partition 尽量均匀打散到 Zone 内所有 OBServer 节点',
      'D. 自动负载均衡会将 Leader 均匀打散到指定的 Primary Zone'
    ],
    answer: 'B, C, D',
    analysis: 'A 项错误：负载均衡由系统 RootService 自动调度管理，用户不能直接硬编码绑定物理节点，只能通过 Tablegroup 或 Primary Zone 策略间接调度。',
    topicId: 'transaction',
    tags: ['负载均衡', 'Tablegroup', 'Primary Zone']
  },
  {
    id: 92,
    questionNumber: 3,
    type: '多选题',
    question: 'OceanBase 数据库完整支持的标准事务隔离级别包含哪些？',
    options: [
      'A. 读未提交 (Read Uncommitted)',
      'B. 串行化 (Serializable)',
      'C. 可重复读 (Repeatable Read)',
      'D. 读已提交 (Read Committed)'
    ],
    answer: 'B, C, D',
    analysis: 'OceanBase 支持读已提交（默认）、可重复读（MySQL 模式）、串行化（MySQL 与 Oracle 模式均支持）。不支持读未提交（Read Uncommitted）。',
    topicId: 'transaction',
    tags: ['隔离级别', '不支持读未提交', 'Read Committed']
  },
  {
    id: 93,
    questionNumber: 4,
    type: '多选题',
    question: 'OceanBase 数据库支持的一级分区类型包含以下哪些？',
    options: [
      'A. Range 分区',
      'B. List 分区',
      'C. Hash 分区',
      'D. Key 分区'
    ],
    answer: 'A, B, C, D',
    analysis: 'OceanBase 完整支持 Range（范围）、List（列表）、Hash（哈希）以及 Key（键值，MySQL 模式专属）四种一级分区类型。',
    topicId: 'transaction',
    tags: ['分区类型', 'Range', 'List', 'Hash', 'Key']
  },
  {
    id: 94,
    questionNumber: 5,
    type: '多选题',
    question: 'OceanBase 生态中提供的独立数据导入与导出工具有哪些？',
    options: [
      'A. OBLOADER 命令行导入工具',
      'B. ODC 开发者中心图形化导数',
      'C. LOAD DATA 内核内置 SQL 命令',
      'D. OBDUMPER 命令行导出工具'
    ],
    answer: 'A, B, D',
    analysis: '独立的客户端周边导数工具主要包括 OBLOADER、OBDUMPER 与 ODC；LOAD DATA 是内核内置的 SQL 命令，不属于独立导数工具。',
    topicId: 'tools',
    tags: ['OBLOADER', 'OBDUMPER', 'ODC', '导数工具']
  },
  {
    id: 95,
    questionNumber: 6,
    type: '多选题',
    question: 'OCP Agent 包含以下哪几个核心常驻进程？',
    options: [
      'A. ocp_agentd (守护主进程)',
      'B. ocp_mgragent (运维管理进程)',
      'C. ocp_proxy (网络代理进程)',
      'D. ocp_monagent (监控采集进程)'
    ],
    answer: 'A, B, D',
    analysis: 'OCP Agent 由三大核心进程构成：ocp_agentd（守护主进程）、ocp_mgragent（运维管理执行进程）、ocp_monagent（性能监控指标采集进程）。',
    topicId: 'tools',
    tags: ['OCP Agent', 'ocp_agentd', 'ocp_mgragent', 'ocp_monagent']
  },
  {
    id: 96,
    questionNumber: 7,
    type: '多选题',
    question: '关于 SHARDING 模式为 PARTITION 的表组（Tablegroup），下列说法正确的是：',
    options: [
      'A. 要求表组内所有表的一级分区方式必须完全相同',
      'B. 要求表组内所有表的分区数量必须完全一致',
      'C. 表组内所有表的同号分区会聚集在相同的物理 OBServer 节点上',
      'D. 表组可以跨多个业务租户共享'
    ],
    answer: 'A, B, C',
    analysis: 'SHARDING=\'PARTITION\' 强制要求同表组内表的一级分区方式、数量及边界完全一致，分区对齐聚集。D 项错误，表组严禁跨租户。',
    topicId: 'transaction',
    tags: ['Tablegroup', 'SHARDING', '分区对齐']
  },
  {
    id: 97,
    questionNumber: 8,
    type: '多选题',
    question: '在 OceanBase V4.x 版本中，租户的类型包含以下哪些？',
    options: [
      'A. 临时租户',
      'B. 用户租户 (User Tenant)',
      'C. Meta 租户 (META$xxx)',
      'D. 系统租户 (sys 租户)'
    ],
    answer: 'B, C, D',
    analysis: 'V4.x 架构包含系统租户（sys 租户）、用户租户（承载业务）以及伴生 Meta 租户（META$xxx）。没有临时租户。',
    topicId: 'tenant',
    tags: ['租户分类', 'sys租户', 'Meta租户', 'V4新特性']
  },
  {
    id: 98,
    questionNumber: 9,
    type: '多选题',
    question: 'EXPLAIN 命令在 OceanBase 中支持的输出语法选项包含：',
    options: [
      'A. EXPLAIN BASIC',
      'B. EXPLAIN EXTENDED',
      'C. EXPLAIN OUTLINE',
      'D. EXPLAIN DETAIL'
    ],
    answer: 'A, B, C',
    analysis: 'OceanBase 支持 EXPLAIN BASIC（简明骨架）、EXPLAIN（标准代价）、EXPLAIN EXTENDED（详尽计划带过滤条件）、EXPLAIN OUTLINE（Hint 提示）。不支持 DETAIL。',
    topicId: 'diagnostics',
    tags: ['EXPLAIN', 'BASIC', 'EXTENDED', 'OUTLINE']
  },
  {
    id: 99,
    questionNumber: 10,
    type: '多选题',
    question: '关于 OCP 告警管理功能，系统原生支持的告警通知渠道包含哪些？',
    options: [
      'A. 钉钉群机器人 (DingTalk Webhook)',
      'B. 电子邮件 (SMTP Email)',
      'C. 手机短信 (SMS)',
      'D. 自定义 HTTP/HTTPS API Webhook 回调'
    ],
    answer: 'A, B, C, D',
    analysis: 'OCP 原生支持钉钉、邮件、短信以及自定义 HTTP API 回调等多种告警通道。',
    topicId: 'tools',
    tags: ['OCP告警', '告警通道', '钉钉Webhook']
  },
  {
    id: 100,
    questionNumber: 11,
    type: '多选题',
    question: '关于 OceanBase 的全功能型副本（F 副本），以下描述正确的是？',
    options: [
      'A. 包含完整的基线 SSTable 和内存 MemTable 数据',
      'B. 包含完整的事务日志 (Clog)',
      'C. 具备 Paxos 成员投票权',
      'D. 可以当选为 Leader 提供强读强写服务'
    ],
    answer: 'A, B, C, D',
    analysis: '全功能型副本（F 副本）兼备完整数据、完整事务日志、Paxos 投票权和当选 Leader 提供读写服务的能力。',
    topicId: 'ha',
    tags: ['F副本', '全功能副本', 'Paxos投票']
  },
  {
    id: 101,
    questionNumber: 12,
    type: '多选题',
    question: '关于 OceanBase 的转储（Minor Compaction）与大合并（Major Compaction），以下对比正确的是？',
    options: [
      'A. 转储的核心目标是快速将冻结的 MemTable 刷盘释放内存空间',
      'B. 大合并的核心目标是全局多路归并、物理清除删除标记与过期版本、释放磁盘空间',
      'C. 转储不会物理删除被 DELETE 标记的数据行',
      'D. 大合并每天低峰期自动触发一次，也可以手动触发'
    ],
    answer: 'A, B, C, D',
    analysis: '四项均正确表达了 LSM-Tree 转储（轻量释放内存）与大合并（重量全局归并、清除 Tombstone、极致压缩）的核心特征。',
    topicId: 'storage',
    tags: ['转储', '大合并', 'Minor/Major', 'LSM-Tree']
  },
  {
    id: 102,
    questionNumber: 13,
    type: '多选题',
    question: 'OceanBase 两级压缩技术的特点包含：',
    options: [
      'A. 第一级高级编码在微块内部根据字段自适应选择字典、前缀等编码',
      'B. 高级编码支持在内存中不解压直接进行下推过滤与聚合计算',
      'C. 第二级采用 LZ4 / zstd 等通用压缩算法二次压缩',
      'D. 综合压缩率可达 70% ~ 90%，显著降低存储成本'
    ],
    answer: 'A, B, C, D',
    analysis: 'OceanBase 独创的两级压缩机制：第一级高级编码（支持算子下推计算）+ 第二级通用压缩，带来超高压缩比与低计算开销。',
    topicId: 'storage',
    tags: ['两级压缩', '高级编码', '通用压缩', '存储成本']
  },
  {
    id: 103,
    questionNumber: 14,
    type: '多选题',
    question: '在生产环境中部署 OceanBase，以下属于前置环境硬性检查项的是？',
    options: [
      'A. 各节点间 RPC 时钟同步偏差必须小于 100ms',
      'B. 操作系统必须关闭 Swap 交换分区',
      'C. 必须使用普通用户 admin 运行',
      'D. 文件描述符限制（ulimit -n）推荐不低于 655350'
    ],
    answer: 'A, B, C, D',
    analysis: '生产环境前置必须满足：NTP 时钟偏差 < 100ms、关闭 Swap、普通用户 admin 启动、高并发文件句柄数设置。',
    topicId: 'architecture',
    tags: ['部署前置', '时钟偏差', 'Swap', 'admin用户']
  },
  {
    id: 104,
    questionNumber: 15,
    type: '多选题',
    question: '下列关于 OceanBase 默认端口对应关系的描述，正确的是？',
    options: [
      'A. 2881：OBServer 的 SQL 协议服务监听端口',
      'B. 2882：OBServer 内部 RPC 通信与 Paxos 复制端口',
      'C. 2883：OBProxy 对外代理 SQL 连接端口',
      'D. 8080：OCP 云平台 Web 控制台默认访问端口'
    ],
    answer: 'A, B, C, D',
    analysis: '2881/2882 为 OBServer SQL/RPC 端口；2883 为 OBProxy 端口；8080 为 OCP Web 端口。全部对应正确。',
    topicId: 'architecture',
    tags: ['端口矩阵', '2881', '2882', '2883', '8080']
  },
  {
    id: 105,
    questionNumber: 16,
    type: '多选题',
    question: '关于多租户资源隔离机制，以下描述正确的是？',
    options: [
      'A. 租户内存严格独占分配，不可超卖，不支持跨租户借用',
      'B. 租户 CPU 支持配额超卖，通过 MIN_CPU 保底和 MAX_CPU 上限调度',
      'C. 租户间共享底层的物理数据磁盘与 block_file 文件',
      'D. 租户的网络 I/O 与磁盘 I/O 通过底层异步队列进行限速隔离'
    ],
    answer: 'A, B, C, D',
    analysis: 'OceanBase 实现四维度资源隔离：内存独占硬隔离、CPU 弹性超卖保底、磁盘共享大文件、I/O 权重流控。',
    topicId: 'tenant',
    tags: ['多租户', '资源隔离', '内存独占', 'CPU超卖']
  },
  {
    id: 106,
    questionNumber: 17,
    type: '多选题',
    question: '下列关于 OceanBase 核心系统日志文件的功能描述，正确的是？',
    options: [
      'A. observer.log：记录 OBServer 进程的常规系统运行日志',
      'B. observer.log.wf：专门过滤记录 Warning 和 Fatal 级别的严重告警日志',
      'C. election.log：专门记录 Paxos 多副本分布式选举与租约日志',
      'D. trace.log：专门记录全链路追踪（Full Link Trace）Span 耗时'
    ],
    answer: 'A, B, C, D',
    analysis: 'observer.log、observer.log.wf、election.log 与 trace.log 各司其职，是 DBA 故障排查的四大关键日志。',
    topicId: 'diagnostics',
    tags: ['日志分工', 'observer.log', 'election.log', 'trace.log']
  },
  {
    id: 107,
    questionNumber: 18,
    type: '多选题',
    question: '关于 OMS（数据传输服务）的迁移与同步全流程，包含以下哪些核心阶段？',
    options: [
      'A. 库表结构迁移 (Schema Migration)',
      'B. 存量全量数据搬迁 (Full Data Migration)',
      'C. 增量实时变更捕获与同步 (Incremental CDC Sync)',
      'D. 全量数据一致性校验与反向同步回滚通道'
    ],
    answer: 'A, B, C, D',
    analysis: 'OMS 提供一站式全生命周期数据迁移：结构迁移 -> 全量迁移 -> 增量同步 -> 校验修复 -> 反向同步。',
    topicId: 'tools',
    tags: ['OMS', '数据迁移', 'CDC增量同步', '一致性校验']
  },
  {
    id: 108,
    questionNumber: 19,
    type: '多选题',
    question: '关于 OceanBase 的 Flashback（闪回）能力，支持以下哪些操作？',
    options: [
      'A. 基于快照历史版本的闪回查询 (Flashback Query)',
      'B. 从回收站秒级闪回误删除的表 (Flashback Drop Table)',
      'C. 从回收站秒级闪回被截断的表 (Flashback Truncate Table)',
      'D. 闪回物理损坏的服务器硬件主板'
    ],
    answer: 'A, B, C',
    analysis: '闪回技术基于 MVCC 快照与回收站机制，支持查询、表闪回与截断闪回；D 项属于物理硬件范畴，软件无法闪回。',
    topicId: 'diagnostics',
    tags: ['Flashback', '闪回查询', 'Recyclebin']
  },
  {
    id: 109,
    questionNumber: 20,
    type: '多选题',
    question: '关于 OceanBase 动态性能视图，以下哪些视图常用于 SQL 调优与诊断？',
    options: [
      'A. GV$OB_SQL_AUDIT (单次 SQL 执行画像)',
      'B. GV$SQL_PLAN_MONITOR (算子级实时监控)',
      'C. GV$ACTIVE_SESSION_HISTORY (ASH 活跃会话历史采样)',
      'D. GV$OB_PARAMETERS (集群与租户参数)'
    ],
    answer: 'A, B, C, D',
    analysis: '这四大视图是性能分析最核心的动态性能视图矩阵。',
    topicId: 'diagnostics',
    tags: ['GV$OB_SQL_AUDIT', 'GV$SQL_PLAN_MONITOR', 'ASH', '视图矩阵']
  },
  {
    id: 110,
    questionNumber: 21,
    type: '多选题',
    question: '关于 OceanBase 商业版（企业版）相比社区版（开源版）的特有功能，包含：',
    options: [
      'A. 完整支持 Oracle 兼容模式（包含 PL/SQL、Package、Oracle 数据类型）',
      'B. 提供闭源的企业级运维管控套件 OCP 与企业级 OMS',
      'C. 拥有原厂商业技术支持与 7x24 小时 SLA 服务保障',
      'D. 底层具备完全不同的分布式共识架构'
    ],
    answer: 'A, B, C',
    analysis: '企业版与社区版同内核同架构（底层的 LSM-Tree、Paxos 多数派协议完全相同），差异主要在 Oracle 兼容模式与商业套件/服务。',
    topicId: 'overview',
    tags: ['企业版', '社区版', 'Oracle兼容', '商业支持']
  },
  {
    id: 111,
    questionNumber: 22,
    type: '多选题',
    question: '关于 OceanBase 的多级缓存体系（KVCache），包含以下哪些核心缓存？',
    options: [
      'A. BlockCache（微块缓存）',
      'B. RowCache（行缓存）',
      'C. Plan Cache（执行计划缓存）',
      'D. Schema Cache（元数据缓存）'
    ],
    answer: 'A, B, C, D',
    analysis: 'OceanBase 内核实现多级缓存机制：BlockCache 缓存微块、RowCache 缓存点查行、Plan Cache 缓存计划、Schema Cache 缓存元数据。',
    topicId: 'storage',
    tags: ['KVCache', 'BlockCache', 'RowCache', 'Plan Cache']
  },
  {
    id: 112,
    questionNumber: 23,
    type: '多选题',
    question: '关于表组（Tablegroup）在分布式数据库中的优化价值，以下说法正确的是：',
    options: [
      'A. 将多张关联表的同号分区聚集在同一台 OBServer 物理节点（Colocation）',
      'B. 将跨机分布式事务优化为本地单机事务，消除 2PC 开销',
      'C. 将跨机分布式 Join 优化为本地 Partition-Wise Join，消除网络重分布传输',
      'D. 自动提高磁盘压缩比'
    ],
    answer: 'A, B, C',
    analysis: 'Tablegroup 的核心价值在于物理亲和聚集（Colocation），消除跨机 2PC 与加速 Join，不直接影响磁盘压缩比。',
    topicId: 'transaction',
    tags: ['Tablegroup', 'Colocation', 'Partition-Wise Join']
  },
  {
    id: 113,
    questionNumber: 24,
    type: '多选题',
    question: '在两地三中心架构中，当异地机房（Zone3）发生网络中断时，下列说法正确的是：',
    options: [
      'A. 集群在同城的 2 个 Zone 仍满足多数派（2/3），业务正常读写且数据零丢失 (RPO=0)',
      'B. 同城强一致写事务的延迟基本不受影响（维持同城毫秒级）',
      'C. 集群会立即停止所有服务',
      'D. 异地机房网络恢复后会自动追赶同步日志'
    ],
    answer: 'A, B, D',
    analysis: '3 副本中异地单机房故障不影响多数派（同城 2 票仍存活），同城写延迟正常，异地网络恢复后自动追日志。C 项错误。',
    topicId: 'ha',
    tags: ['两地三中心', '异地断网', '多数派存活', 'RPO=0']
  },
  {
    id: 114,
    questionNumber: 25,
    type: '多选题',
    question: '关于 OceanBase 的物理备份与恢复，以下说法正确的是：',
    options: [
      'A. 物理备份包含基线数据备份（SSTable）和连续事务日志归档（Clog）两部分',
      'B. 支持全量数据备份和增量数据备份',
      'C. 支持 PITR（Point-in-Time Recovery），可将租户恢复到历史任意指定时间点',
      'D. 备份数据必须存放在本机 /tmp 目录下'
    ],
    answer: 'A, B, C',
    analysis: '物理备份由数据备份 + 日志归档组成，支持 PITR 任意时间点恢复，备份数据需存放在外部独立存储介质（NFS/OSS 等）。',
    topicId: 'ha',
    tags: ['物理备份', 'PITR', '日志归档']
  },
  {
    id: 115,
    questionNumber: 26,
    type: '多选题',
    question: '关于 OceanBase 的日志流（Log Stream, LS），以下特点正确的是：',
    options: [
      'A. 是 V4.x 引入的重要架构演进',
      'B. 多个 Tablet（分片）汇聚在同一个日志流中',
      'C. Paxos 选举与日志复制以日志流为基本单位，大幅收敛心跳开销',
      'D. 单机可轻松支撑上百万个数据分片'
    ],
    answer: 'A, B, C, D',
    analysis: '日志流是 V4 版本的核心架构升级，解决 V3 单机分区过多导致 Paxos 线程与心跳爆炸的难题。',
    topicId: 'ha',
    tags: ['日志流', 'Log Stream', 'V4架构', '多对一']
  },
  {
    id: 116,
    questionNumber: 27,
    type: '多选题',
    question: '关于 OceanBase 的 MVCC 多版本并发控制机制，以下描述正确的是：',
    options: [
      'A. 写操作会生成新版本数据，写操作之间通过行级排他锁互斥',
      'B. 读操作按照快照时间戳读取一致性版本，读不加锁',
      'C. 读操作不会阻塞写操作，写操作也不会阻塞读操作',
      'D. 写操作必须加全表共享锁'
    ],
    answer: 'A, B, C',
    analysis: 'MVCC 核心收益是读写互不阻塞，写写加行锁，读操作走快照读不加锁。D 项错误。',
    topicId: 'transaction',
    tags: ['MVCC', '行级锁', '快照读', '读写互不阻塞']
  },
  {
    id: 117,
    questionNumber: 28,
    type: '多选题',
    question: '关于 OceanBase 的二级组合分区表，支持以下哪些组合方式？',
    options: [
      'A. Range + Hash 分区',
      'B. Range + List 分区',
      'C. List + Hash 分区',
      'D. Hash + Range 分区'
    ],
    answer: 'A, B, C, D',
    analysis: 'OceanBase 原生支持 Range、List、Hash 一级分区与二级分区的两两自由组合。',
    topicId: 'transaction',
    tags: ['二级分区', '组合分区', 'Range/List/Hash']
  },
  {
    id: 118,
    questionNumber: 29,
    type: '多选题',
    question: '关于 OceanBase 的全局时间戳服务（GTS），以下描述正确的是：',
    options: [
      'A. 由 sys 租户提供集中且单调递增的逻辑时间戳',
      'B. 用于为分布式跨节点事务提供全局一致的快照读基准',
      'C. 彻底解决了分布式环境下不同节点物理时钟存在微小偏差的问题',
      'D. 仅在单机事务中生效'
    ],
    answer: 'A, B, C',
    analysis: 'GTS 为分布式跨机事务提供单调递增的全局逻辑时间戳，解决时钟漂移，保障全局一致性快照读。',
    topicId: 'transaction',
    tags: ['GTS', '全局时间戳', '一致性快照']
  },
  {
    id: 119,
    questionNumber: 30,
    type: '多选题',
    question: '关于 OCP 对 OceanBase 集群的运维管理能力，包含以下哪些功能？',
    options: [
      'A. 集群与租户的创建、删除与规格扩缩容',
      'B. 主机与数据库核心性能指标的监控与多渠道告警',
      'C. 按 Zone 滚动无感升级集群内核版本',
      'D. 租户级物理备份与 PITR 恢复编排'
    ],
    answer: 'A, B, C, D',
    analysis: 'OCP 提供集群生命周期管理、资源扩缩容、监控告警、滚动升级及备份恢复的全方位运维支撑。',
    topicId: 'tools',
    tags: ['OCP', '集群运维', '滚动升级', '监控告警']
  },
  {
    id: 120,
    questionNumber: 31,
    type: '多选题',
    question: '关于 OceanBase 的日志型副本（L 副本），以下说法正确的是：',
    options: [
      'A. 不包含 MemTable 和 SSTable 数据',
      'B. 包含完整的事务日志 (Clog)',
      'C. 具有 Paxos 成员投票权',
      'D. 适用于跨地域部署作为低成本仲裁节点'
    ],
    answer: 'A, B, C, D',
    analysis: 'L 副本仅同步并持久化日志参与 Paxos 投票，不存基线数据，能大幅节约硬件存储成本，非常适合作为仲裁节点。',
    topicId: 'ha',
    tags: ['L副本', '仲裁节点', '日志型副本']
  },
  {
    id: 121,
    questionNumber: 32,
    type: '多选题',
    question: '下列关于 OBServer 工作目录规划中各个目录的作用，描述正确的是：',
    options: [
      'A. /home/admin/oceanbase/bin：存放 observer 二进制程序',
      'B. /home/admin/oceanbase/etc：存放 observer.config.bin 配置文件',
      'C. /data/log1：独立挂载 SSD 磁盘用于存放事务日志 (Clog)',
      'D. /data/1：独立挂载大容量磁盘用于存放基线数据 (block_file)'
    ],
    answer: 'A, B, C, D',
    analysis: '四项均符合官方标准目录与磁盘划分最佳实践规范。',
    topicId: 'architecture',
    tags: ['目录规范', '磁盘划分', '部署实践']
  },
  {
    id: 122,
    questionNumber: 33,
    type: '多选题',
    question: '关于 OceanBase 准内存 LSM-Tree 存储引擎的写操作流程，以下描述正确的是：',
    options: [
      'A. 所有增删改 DML 操作直接写入内存中的 MemTable',
      'B. 同步写 Clog 日志并通过 Paxos 多数派确认持久化',
      'C. 避免了传统数据库高频的磁盘随机小 I/O 写入',
      'D. 将写操作转变为纯内存写入与批量顺序磁盘刷盘'
    ],
    answer: 'A, B, C, D',
    analysis: '准内存 LSM-Tree 写操作写内存 MemTable + Paxos Clog 追加写，消除磁盘随机覆写，极大提升写性能与 SSD 寿命。',
    topicId: 'storage',
    tags: ['LSM-Tree', '准内存', '写路径', 'MemTable']
  },
  {
    id: 123,
    questionNumber: 34,
    type: '多选题',
    question: '关于 OceanBase 的两阶段提交（2PC）协议，以下说法正确的是：',
    options: [
      'A. 用于保障跨节点、跨分区分布式事务的原子性 (Atomicity)',
      'B. 协调者自身不记录额外的 Paxos 日志，是无状态化的',
      'C. 若协调者故障，新当选的协调者向参与者反向查询持久化状态即可推导决议',
      'D. 参与者在 PREPARE 成功后会将日志落盘持久化'
    ],
    answer: 'A, B, C, D',
    analysis: 'OceanBase 自研无状态 2PC 架构，协调者无状态不写额外日志，消除单点挂起，高效保证原子性。',
    topicId: 'transaction',
    tags: ['2PC', '无状态协调者', '分布式事务']
  },
  {
    id: 124,
    questionNumber: 35,
    type: '多选题',
    question: '下列关于 OceanBase 的 Primary Zone 设置的理解，正确的是：',
    options: [
      'A. PRIMARY_ZONE 用于控制租户内各个分区的 Leader 优先分布在哪些 Zone 中',
      'B. 逗号（,）分隔的 Zone 表示具有相同的优先级，Leader 会平均打散分布',
      'C. 分号（;）分隔的 Zone 表示优先级由高到低递减',
      'D. PRIMARY_ZONE 设置为 RANDOM 时表示 Leader 随机打散在所有 Zone'
    ],
    answer: 'A, B, C, D',
    analysis: 'PRIMARY_ZONE 控制选主偏好：逗号同优先级打散，分号降序备选，RANDOM 为全随机打散。',
    topicId: 'ha',
    tags: ['Primary Zone', 'Leader分布', '优先级语法']
  },
  {
    id: 125,
    questionNumber: 36,
    type: '多选题',
    question: '关于 OceanBase 租户的 UNIT_NUM 计算，以下说法正确的是：',
    options: [
      'A. UNIT_NUM 代表租户在单个 Zone 内部所分配的资源单元数量',
      'B. 承载该租户所需的服务器总数 = Zone 数量 × UNIT_NUM',
      'C. 单个 Zone 内的 OBServer 服务器数量必须 ≥ UNIT_NUM',
      'D. 同一台 OBServer 节点上同一个租户最多只能分配 1 个 Unit'
    ],
    answer: 'A, B, C, D',
    analysis: '四项完整阐述了 UNIT_NUM 黄金计算公式与单机单租户互斥约束。',
    topicId: 'tenant',
    tags: ['UNIT_NUM', '资源计算', '单机单Unit']
  },
  {
    id: 126,
    questionNumber: 37,
    type: '多选题',
    question: '关于 OMA（迁移评估工具），以下描述正确的是：',
    options: [
      'A. 评估源端数据库（如 Oracle/MySQL）对象与 SQL 在 OceanBase 的兼容度',
      'B. 针对不兼容对象与语法给出官方改写建议',
      'C. 支持采集源端真实业务流量并在测试集群进行负载回放压测',
      'D. 直接执行生产全量数据搬迁'
    ],
    answer: 'A, B, C',
    analysis: 'OMA 专注于迁前评估与流量回放，本身不执行数据迁移（数据迁移动作由 OMS 负责）。',
    topicId: 'tools',
    tags: ['OMA', '兼容性评估', '流量回放']
  },
  {
    id: 127,
    questionNumber: 38,
    type: '多选题',
    question: '关于 OceanBase 数据库的并行执行（PX），以下说法正确的是：',
    options: [
      'A. 可以利用多台 OBServer 节点的多个 CPU 核心并行处理单条大 SQL 查询',
      'B. 通过 Query Coordinator (QC) 调度分布式数据流算子 (DFO)',
      'C. 支持在复杂分析型 OLAP 场景下实现海量数据高速并行扫描与聚合',
      'D. 必须在单机单核上串行执行'
    ],
    answer: 'A, B, C',
    analysis: 'PX 是 OceanBase HTAP 分析能力的核心支柱，利用 QC 调度 DFO 实现跨节点多核并行计算。',
    topicId: 'storage',
    tags: ['PX', 'QC', 'DFO', '并行执行']
  },
  {
    id: 128,
    questionNumber: 39,
    type: '多选题',
    question: '关于 OceanBase 的只读型副本（R 副本），以下描述正确的是：',
    options: [
      'A. 包含完整的 SSTable 和 MemTable 数据',
      'B. 不具备 Paxos 成员投票权',
      'C. 异步回放日志，不影响写事务的提交延迟',
      'D. 专门用于承担弱一致性读流量，实现读写负载分流'
    ],
    answer: 'A, B, C, D',
    analysis: 'R 副本拥有完整数据、无投票权、异步回放日志、专供弱读分流。',
    topicId: 'ha',
    tags: ['R副本', '只读副本', '读写分离']
  },
  {
    id: 129,
    questionNumber: 40,
    type: '多选题',
    question: '关于 OceanBase 数据库的去中心化架构，以下说法正确的是：',
    options: [
      'A. 不存在物理上的单点 Master 瓶颈服务器',
      'B. 所有 OBServer 在物理地位上完全对等（全对称）',
      'C. RootService 总控服务自身通过 Paxos 协议实现高可用自愈',
      'D. 分布式事务与一致性协议完全在内核引擎内原生实现'
    ],
    answer: 'A, B, C, D',
    analysis: '全对称架构、去中心化设计、RS Paxos 自愈与内核原生分布式是 OceanBase 最核心的架构精髓。',
    topicId: 'overview',
    tags: ['去中心化', '全对称', '原生分布式', '高可用']
  },
  {
    id: 130,
    questionNumber: 41,
    type: '多选题',
    question: '关于 OceanBase 数据库支持的备份介质类型，包含以下哪些？',
    options: [
      'A. 网络文件系统 (NFS)',
      'B. 阿里云对象存储 (OSS)',
      'C. 腾讯云对象存储 (COS)',
      'D. 兼容 AWS S3 协议的通用对象存储'
    ],
    answer: 'A, B, C, D',
    analysis: 'OceanBase 物理备份原生支持 NFS 网络共享盘、阿里云 OSS、腾讯云 COS 以及所有标准 S3 兼容协议的对象存储。',
    topicId: 'ha',
    tags: ['备份介质', 'NFS', 'OSS', 'S3兼容']
  },
  {
    id: 131,
    questionNumber: 42,
    type: '多选题',
    question: '关于 OceanBase 的只读事务与快照读机制，以下说法正确的是：',
    options: [
      'A. 读事务完全不需要申请行锁，实现无锁读取',
      'B. 读事务不会被任何写事务阻塞',
      'C. 写事务不会因为读事务正在读取而被阻塞',
      'D. 读事务必须加全表读锁以保证一致性'
    ],
    answer: 'A, B, C',
    analysis: '基于 MVCC 快照读，读操作依据时间戳读取历史版本快照，读写互不阻塞，无需申请锁。D 项错误。',
    topicId: 'transaction',
    tags: ['MVCC', '快照读', '无锁读', '读写并发']
  },
  {
    id: 132,
    questionNumber: 43,
    type: '多选题',
    question: '关于 OceanBase 多租户环境下创建租户的必要三部曲语句，包含哪些？',
    options: [
      'A. CREATE RESOURCE UNIT',
      'B. CREATE RESOURCE POOL',
      'C. CREATE TENANT',
      'D. CREATE SHARDING CLUSTER'
    ],
    answer: 'A, B, C',
    analysis: 'OceanBase 创建租户的标准流程为：1. CREATE RESOURCE UNIT; 2. CREATE RESOURCE POOL; 3. CREATE TENANT。无 D 语法。',
    topicId: 'tenant',
    tags: ['CREATE TENANT', '资源创建三部曲', '多租户']
  },
  {
    id: 133,
    questionNumber: 44,
    type: '多选题',
    question: '关于 OBProxy（数据库代理）的核心能力，包含以下哪些？',
    options: [
      'A. SQL 高性能精准反向路由转发（准确找到对应分区的 Leader 节点）',
      'B. 多租户会话连接池管理与快速认证',
      'C. 屏蔽后端物理集群拓扑变动与切主故障，实现客户端无感重连',
      'D. 持久化存储用户业务基线数据 SSTable'
    ],
    answer: 'A, B, C',
    analysis: 'OBProxy 是轻量级无状态反向代理层，专职做路由计算、连接管理与屏蔽故障；它不存储任何用户持久化数据。',
    topicId: 'architecture',
    tags: ['OBProxy', '路由转发', '无状态代理']
  },
  {
    id: 134,
    questionNumber: 45,
    type: '多选题',
    question: '关于 OceanBase 的 SQL 执行计划类型，主要包含以下哪些形式？',
    options: [
      'A. 本地执行计划 (Local Plan)',
      'B. 远程执行计划 (Remote Plan)',
      'C. 分布式执行计划 (Distribute Plan)',
      'D. 跨机事务提交计划 (2PC Plan)'
    ],
    answer: 'A, B, C',
    analysis: 'OceanBase SQL 执行计划标准分为三大类：Local 计划（单机本地）、Remote 计划（单机跨节点）、Distributed 计划（多节点分布式并行）。',
    topicId: 'diagnostics',
    tags: ['执行计划', 'Local', 'Remote', 'Distributed']
  },
  {
    id: 135,
    questionNumber: 46,
    type: '多选题',
    question: '关于 OceanBase 的转储策略参数，以下哪些参数直接影响转储触发与行为？',
    options: [
      'A. freeze_trigger_percentage (内存使用率转储阈值)',
      'B. minor_freeze_times (两次大合并之间的最大转储次数)',
      'C. major_freeze_duty_time (大合并每日低峰期触发时间)',
      'D. max_kept_major_version_number (保留的历史大版本快照数)'
    ],
    answer: 'A, B, C, D',
    analysis: 'freeze_trigger_percentage 决定转储阈值，minor_freeze_times 限制转储转大合并，major_freeze_duty_time 定时大合并，max_kept_major_version_number 决定快照保留数量。',
    topicId: 'storage',
    tags: ['转储参数', '大合并参数', 'freeze_trigger_percentage']
  },
  {
    id: 136,
    questionNumber: 47,
    type: '多选题',
    question: '在两地三中心部署架构中，关于其容灾能力的描述正确的是：',
    options: [
      'A. 能够抵御同城单机房级别的物理断电和网络中断灾难',
      'B. 能够抵御异地单机房网络中断故障',
      'C. 同城机房故障时 RPO = 0，数据不丢',
      'D. 异地单机房网络中断时业务仍可正常读写'
    ],
    answer: 'A, B, C, D',
    analysis: '两地三中心架构提供城市级高可靠容灾：同城机房断电或异地断网，存活副本均满足多数派，RPO=0 零丢数据，业务秒级自愈。',
    topicId: 'ha',
    tags: ['两地三中心', '容灾能力', '城市级容灾']
  },
  {
    id: 137,
    questionNumber: 48,
    type: '多选题',
    question: '关于 OceanBase 的分区裁剪（Partition Pruning）优化技术，以下说法正确的是：',
    options: [
      'A. 根据查询 WHERE 条件中的分区键谓词，在优化阶段排除无关分区',
      'B. 大幅减少不必要的数据扫描 I/O 和计算开销',
      'C. 支持在静态编译期与动态运行期进行分区裁剪',
      'D. 分区裁剪必须强制全表扫描'
    ],
    answer: 'A, B, C',
    analysis: '分区裁剪（Partition Pruning）通过分区键过滤条件直接剪掉无关分区，避免全表扫描，极大提升查询效率。',
    topicId: 'transaction',
    tags: ['分区裁剪', 'Partition Pruning', 'SQL优化']
  },
  {
    id: 138,
    questionNumber: 49,
    type: '多选题',
    question: '关于 ODC（开发者中心）在团队协同与数据安全管控方面的特性，包含：',
    options: [
      'A. 针对高危 SQL（如无 WHERE 条件 UPDATE/DELETE）设置审批流',
      'B. 针对敏感业务字段支持动态数据脱敏展示',
      'C. 支持团队多角色 RBAC 权限管理',
      'D. 强制要求所有 SQL 都必须单核串行执行'
    ],
    answer: 'A, B, C',
    analysis: 'ODC 企业版具备强大的数据研发协同与安全管控能力：SQL 变更工单审批流、敏感数据动态脱敏、多角色权限隔离。D 项非 ODC 行为。',
    topicId: 'tools',
    tags: ['ODC', '安全合规', '数据脱敏', '审批工单']
  },
  {
    id: 139,
    questionNumber: 50,
    type: '多选题',
    question: '关于 OceanBase 的 Hash 分区表与 Key 分区表，下列对比说法正确的是：',
    options: [
      'A. Hash 分区要求分区表达式结果必须为整型（INTEGER）',
      'B. Key 分区（MySQL 模式专属）支持非整型列（如 VARCHAR、DATE）直接作为分区键',
      'C. 两者在定义时都需要显式指定 PARTITIONS 分区总数',
      'D. Key 分区和 Hash 分区都不支持二级分区'
    ],
    answer: 'A, B, C',
    analysis: 'Hash 分区表达式结果必须为整数；Key 分区支持非整型字段由系统哈希计算；两者均需指定分区数，且均支持作为一级或二级分区组合。',
    topicId: 'transaction',
    tags: ['Hash分区', 'Key分区', '分区区别']
  }
];
