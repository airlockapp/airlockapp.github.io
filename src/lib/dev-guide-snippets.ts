import type { DevGuideLang } from "@/lib/docs-language-store";

export type SnippetEntry = {
  id: DevGuideLang | "http" | "json" | "text" | "bash";
  label: string;
  lang: string;
  code: string;
};

export type DevGuideBlock = {
  multi: boolean;
  fixedLabel?: string;
  snippets: SnippetEntry[];
};

export type DevGuideBlockId =
  | "httpPublicClient"
  | "httpConfidentialClient"
  | "authPat"
  | "authBearer"
  | "authDual"
  | "initClient"
  | "lifecycleDiagram"
  | "discoveryRequest"
  | "discoveryResponse"
  | "setPat"
  | "setBearer"
  | "consentCheckRequest"
  | "initiatePairing"
  | "pairingStatus"
  | "httpPreGeneratePairing"
  | "claimPairing"
  | "heartbeat"
  | "submitArtifact"
  | "waitForDecision"
  | "submitAck"
  | "withdrawExchange"
  | "revokePairing"
  | "architectureDiagram"
  | "runTestEnforcer";

type Urls = {
  gatewayUrl: string;
  gatewayHost: string;
  authBaseUrl: string;
};

function sdkSnippets(
  urls: Urls,
  codes: Record<DevGuideLang, string>,
): SnippetEntry[] {
  return [
    { id: "python", label: "Python", lang: "python", code: codes.python },
    { id: "typescript", label: "TypeScript", lang: "typescript", code: codes.typescript },
    { id: "csharp", label: ".NET", lang: "csharp", code: codes.csharp },
    { id: "go", label: "Go", lang: "go", code: codes.go },
    { id: "rust", label: "Rust", lang: "rust", code: codes.rust },
  ];
}

export function buildDevGuideBlocks(urls: Urls): Record<DevGuideBlockId, DevGuideBlock> {
  const { gatewayUrl, gatewayHost, authBaseUrl } = urls;

  return {
    httpPublicClient: {
      multi: false,
      fixedLabel: "HTTP",
      snippets: [
        {
          id: "http",
          label: "HTTP",
          lang: "http",
          code: `GET /v1/exchanges/req-123 HTTP/1.1
Host: ${gatewayHost}
X-Client-Id: <your-client-id>
Origin: https://myapp.example.com
Authorization: Bearer <user-jwt>`,
        },
      ],
    },
    httpConfidentialClient: {
      multi: false,
      fixedLabel: "HTTP",
      snippets: [
        {
          id: "http",
          label: "HTTP",
          lang: "http",
          code: `POST /v1/artifacts HTTP/1.1
Host: ${gatewayHost}
X-Client-Id: <your-client-id>
X-Client-Secret: <your-client-secret>
Authorization: Bearer <user-jwt>`,
        },
      ],
    },
    authPat: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `# Recommended: set a Personal Access Token (X-PAT header)
# Issued by your org admin or from the Mobile Approver
client.set_pat("<your-pat>")`,
        typescript: `// Recommended: PAT from your org admin or Mobile Approver (X-PAT header)
client.setPat("<your-pat>");`,
        csharp: `// After obtaining a PAT from your org admin or Mobile Approver
client.SetPat("<your-pat>");`,
        go: `// After obtaining a PAT from your org admin or Mobile Approver
client.SetPat("<your-pat>")`,
        rust: `// After obtaining a PAT from your org admin or Mobile Approver
client.set_pat(Some("<your-pat>".to_string()));`,
      }),
    },
    authBearer: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `from airlock_gateway import AirlockGatewayClient

async with AirlockGatewayClient(
    "${gatewayUrl}",
    token="<user-jwt>",
) as client:
    echo = await client.echo()`,
        typescript: `import { AirlockGatewayClient } from "@airlockapp/gateway-sdk";

const client = new AirlockGatewayClient({
  baseUrl: "${gatewayUrl}",
  token: "<user-jwt>",
});`,
        csharp: `using Airlock.Gateway.Sdk;

var client = new AirlockGatewayClient("${gatewayUrl}", bearerToken: "<user-jwt>");`,
        go: `client := airlock.NewClient("${gatewayUrl}", "<user-jwt>")`,
        rust: `let client = AirlockGatewayClient::new(
    "${gatewayUrl}",
    Some("<user-jwt>"),
)?;`,
      }),
    },
    authDual: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `# After user login (Device Auth Grant or Auth Code + PKCE)
client.set_bearer_token(access_token)`,
        typescript: `// After user login (Device Auth Grant or Auth Code + PKCE)
client.setBearerToken(accessToken);`,
        csharp: `// After user login (Device Auth Grant or Auth Code + PKCE)
client.SetBearerToken(accessToken);`,
        go: `// After user login (Device Auth Grant or Auth Code + PKCE)
client.SetBearerToken(accessToken)`,
        rust: `// After user login (Device Auth Grant or Auth Code + PKCE)
client.set_bearer_token(Some(access_token));`,
      }),
    },
    initClient: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `from airlock_gateway import AirlockGatewayClient

client = AirlockGatewayClient(
    "${gatewayUrl}",
    client_id="<your-client-id>",
    client_secret="<your-client-secret>",
)`,
        typescript: `import { AirlockGatewayClient } from "@airlockapp/gateway-sdk";

const client = new AirlockGatewayClient({
  baseUrl: "${gatewayUrl}",
  clientId: "<your-client-id>",
  clientSecret: "<your-client-secret>",
});`,
        csharp: `var httpClient = new HttpClient { BaseAddress = new Uri("${gatewayUrl}") };
httpClient.DefaultRequestHeaders.Add("X-Client-Id", "<your-client-id>");
httpClient.DefaultRequestHeaders.Add("X-Client-Secret", "<your-client-secret>");

var client = new AirlockGatewayClient(httpClient);`,
        go: `client := airlock.NewClientWithCredentials(
    "${gatewayUrl}",
    "<your-client-id>",
    "<your-client-secret>",
)`,
        rust: `let client = AirlockGatewayClient::with_credentials(
    "${gatewayUrl}",
    "<your-client-id>",
    "<your-client-secret>",
)?;`,
      }),
    },
    lifecycleDiagram: {
      multi: false,
      fixedLabel: "Diagram",
      snippets: [
        {
          id: "text",
          label: "Diagram",
          lang: "text",
          code: `Discovery → Set PAT (or Sign In) → Consent Check → Pair → Heartbeat ↺
                                                              ↓
                                                  Submit Artifact → Wait for Decision → Ack delivery
                                                              ↓
                                                      Unpair → Sign Out`,
        },
      ],
    },
    discoveryRequest: {
      multi: false,
      fixedLabel: "HTTP",
      snippets: [{ id: "http", label: "HTTP", lang: "http", code: "GET /v1/integrations/discovery" }],
    },
    discoveryResponse: {
      multi: false,
      fixedLabel: "JSON",
      snippets: [
        {
          id: "json",
          label: "JSON",
          lang: "json",
          code: `{
  "idp": {
    "baseUrl": "${authBaseUrl}",
    "clientId": "<your-integrations-client-id>"
  },
  "auth": {
    "patSupported": true
  }
}`,
        },
      ],
    },
    setPat: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `# Set the PAT on the client (recommended for CLIs / scripts)
client.set_pat("<your-pat>")`,
        typescript: `// Set the PAT on the client (recommended for CLIs / scripts)
client.setPat("<your-pat>");`,
        csharp: `// Set the PAT on the client (recommended for CLIs / scripts)
client.SetPat("<your-pat>");`,
        go: `// Set the PAT on the client (recommended for CLIs / scripts)
client.SetPat("<your-pat>")`,
        rust: `// Set the PAT on the client (recommended for CLIs / scripts)
client.set_pat(Some("<your-pat>".to_string()));`,
      }),
    },
    setBearer: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `# After obtaining the access token
client.set_bearer_token(access_token)`,
        typescript: `// After obtaining the access token
client.setBearerToken(accessToken);`,
        csharp: `// After obtaining the access token
client.SetBearerToken(accessToken);`,
        go: `// After obtaining the access token
client.SetBearerToken(accessToken)`,
        rust: `// After obtaining the access token
client.set_bearer_token(Some(access_token));`,
      }),
    },
    consentCheckRequest: {
      multi: false,
      fixedLabel: "HTTP",
      snippets: [{ id: "http", label: "HTTP", lang: "http", code: "GET /v1/consents/check" }],
    },
    initiatePairing: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `response = client.initiate_pairing(
    device_id="dev-my-machine",
    enforcer_id="my-enforcer",
    enforcer_label="My Custom Enforcer",
    workspace_name="default",
)

# Display the pairing code to the approver
print(f"Pairing code: {response.pairing_code}")
print("Enter this code in the Mobile Approver.")`,
        typescript: `const response = await client.initiatePairing({
  enforcerId: "my-enforcer",
  enforcerLabel: "My Custom Enforcer",
  workspaceName: "default",
});

console.log(\`Pairing code: \${response.pairingCode}\`);`,
        csharp: `var pairing = await client.InitiatePairingAsync(new PairingInitiateRequest
{
    EnforcerId = "my-enforcer",
    EnforcerLabel = "My Custom Enforcer",
    WorkspaceName = "default",
});

Console.WriteLine($"Pairing code: {pairing.PairingCode}");`,
        go: `resp, err := client.InitiatePairing(airlock.PairingInitiateRequest{
    EnforcerID:     "my-enforcer",
    EnforcerLabel:  "My Custom Enforcer",
    WorkspaceName:  "default",
})
fmt.Printf("Pairing code: %s\\n", resp.PairingCode)`,
        rust: `let resp = client.initiate_pairing(PairingInitiateRequest {
    enforcer_id: "my-enforcer".into(),
    enforcer_label: Some("My Custom Enforcer".into()),
    workspace_name: "default".into(),
    ..Default::default()
}).await?;

println!("Pairing code: {}", resp.pairing_code);`,
      }),
    },
    pairingStatus: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `status = client.get_pairing_status(response.pairing_nonce)
if status.state == "completed":
    routing_token = status.routing_token
    # Save this token — you'll need it for all subsequent requests`,
        typescript: `const status = await client.getPairingStatus(response.nonce);
if (status.state === "Completed") {
  const routingToken = status.routingToken;
  // Save this token — you'll need it for all subsequent requests
}`,
        csharp: `var status = await client.GetPairingStatusAsync(pairing.Nonce);
if (status.State == "Completed")
{
    var routingToken = status.RoutingToken;
}`,
        go: `status, err := client.GetPairingStatus(resp.Nonce)
if status.State == "Completed" {
    routingToken := status.RoutingToken
}`,
        rust: `let status = client.get_pairing_status(&resp.nonce).await?;
if status.state == "Completed" {
    let routing_token = status.routing_token;
}`,
      }),
    },
    httpPreGeneratePairing: {
      multi: false,
      fixedLabel: "HTTP",
      snippets: [{ id: "http", label: "HTTP", lang: "http", code: "POST /v1/pairing/pre-generate" }],
    },
    claimPairing: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `response = client.claim_pairing(
    pairing_code="ABCD-1234",
    enforcer_id="my-enforcer",
    enforcer_label="My Custom Enforcer",
    workspace_name="default",
)
routing_token = response.routing_token`,
        typescript: `const claim = await client.claimPairing({
  code: "ABCD-1234",
  enforcerId: "my-enforcer",
  enforcerLabel: "My Custom Enforcer",
  workspaceName: "default",
});
const routingToken = claim.routingToken;`,
        csharp: `var claim = await client.ClaimPairingAsync(new PairingClaimRequest
{
    Code = "ABCD-1234",
    EnforcerId = "my-enforcer",
    EnforcerLabel = "My Custom Enforcer",
    WorkspaceName = "default",
});
var routingToken = claim.RoutingToken;`,
        go: `claim, err := client.ClaimPairing(airlock.PairingClaimRequest{
    Code:          "ABCD-1234",
    EnforcerID:    "my-enforcer",
    EnforcerLabel: "My Custom Enforcer",
    WorkspaceName: "default",
})
routingToken := claim.RoutingToken`,
        rust: `let claim = client.claim_pairing(PairingClaimRequest {
    code: "ABCD-1234".into(),
    enforcer_id: "my-enforcer".into(),
    enforcer_label: Some("My Custom Enforcer".into()),
    workspace_name: "default".into(),
    ..Default::default()
}).await?;
let routing_token = claim.routing_token;`,
      }),
    },
    heartbeat: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `client.send_heartbeat(
    enforcer_id="my-enforcer",
    enforcer_label="My Custom Enforcer",
    workspace_name="default",
)`,
        typescript: `await client.sendHeartbeat({
  enforcerId: "my-enforcer",
  enforcerLabel: "My Custom Enforcer",
  workspaceName: "default",
});`,
        csharp: `await client.SendHeartbeatAsync(new HeartbeatRequest
{
    EnforcerId = "my-enforcer",
    EnforcerLabel = "My Custom Enforcer",
    WorkspaceName = "default",
});`,
        go: `err := client.SendHeartbeat(airlock.HeartbeatRequest{
    EnforcerID:    "my-enforcer",
    EnforcerLabel: "My Custom Enforcer",
    WorkspaceName: "default",
})`,
        rust: `client.send_heartbeat(HeartbeatRequest {
    enforcer_id: "my-enforcer".into(),
    enforcer_label: Some("My Custom Enforcer".into()),
    workspace_name: "default".into(),
    ..Default::default()
}).await?;`,
      }),
    },
    submitArtifact: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `request_id = client.submit_artifact(
    enforcer_id="my-enforcer",
    artifact_type="command.review",
    artifact_hash="sha256-of-content",
    ciphertext={
        "alg": "xchacha20-poly1305",
        "data": "<base64-encrypted-payload>",
        "nonce": "<base64-nonce>",
        "tag": "<base64-auth-tag>",
    },
    metadata={
        "routingToken": routing_token,
        "workspaceName": "default",
    },
)`,
        typescript: `const requestId = await client.submitArtifact({
  enforcerId: "my-enforcer",
  artifactType: "command.review",
  artifactHash: "sha256-of-content",
  ciphertext: {
    alg: "aes-256-gcm",
    data: "<base64-encrypted-payload>",
    nonce: "<base64-nonce>",
    tag: "<base64-auth-tag>",
  },
  metadata: { routingToken, workspaceName: "default" },
});`,
        csharp: `var requestId = await client.SubmitArtifactAsync(new ArtifactSubmitRequest
{
    EnforcerId = "my-enforcer",
    ArtifactType = "command.review",
    ArtifactHash = "sha256-of-content",
    Ciphertext = new EncryptedPayload
    {
        Alg = "aes-256-gcm",
        Data = "<base64-encrypted-payload>",
        Nonce = "base64-nonce",
        Tag = "base64-auth-tag",
    },
    Metadata = new Dictionary<string, string>
    {
        ["routingToken"] = routingToken,
        ["workspaceName"] = "default",
    },
});`,
        go: `requestID, err := client.SubmitArtifact(airlock.ArtifactSubmitRequest{
    EnforcerID:   "my-enforcer",
    ArtifactType: "command.review",
    ArtifactHash: "sha256-of-content",
    Ciphertext: airlock.EncryptedPayload{
        Alg:   "aes-256-gcm",
        Data:  "<base64-encrypted-payload>",
        Nonce: "<base64-nonce>",
        Tag:   "<base64-auth-tag>",
    },
    Metadata: map[string]string{
        "routingToken":  routingToken,
        "workspaceName": "default",
    },
})`,
        rust: `let request_id = client.submit_artifact(ArtifactSubmitRequest {
    enforcer_id: "my-enforcer".into(),
    artifact_type: Some("command.review".into()),
    artifact_hash: "sha256-of-content".into(),
    ciphertext: EncryptedPayload {
        alg: "aes-256-gcm".into(),
        data: "<base64-encrypted-payload>".into(),
        nonce: Some("<base64-nonce>".into()),
        tag: Some("<base64-auth-tag>".into()),
        aad: None,
    },
    metadata: Some(HashMap::from([
        ("routingToken".into(), routing_token),
        ("workspaceName".into(), "default".into()),
    ])),
    ..Default::default()
}).await?;`,
      }),
    },
    waitForDecision: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `decision = client.wait_for_decision(request_id, timeout_seconds=25)

if decision and decision.body:
    if decision.body.decision == "approve":
        # Execute the agent's action
        pass
    else:
        # Block the agent's action
        reason = decision.body.reason`,
        typescript: `const decision = await client.waitForDecision(requestId, 25);

if (decision?.body?.decision === "approve") {
  // Execute the agent's action
} else {
  const reason = decision?.body?.reason;
}`,
        csharp: `var decision = await client.WaitForDecisionAsync(requestId, timeoutSeconds: 25);
if (decision?.Body?.IsApproved == true)
{
    // Execute the agent's action
}
else
{
    var reason = decision?.Body?.Reason;
}`,
        go: `decision, err := client.WaitForDecision(requestID, 25)
if decision != nil && decision.Body.IsApproved() {
    // Execute the agent's action
} else {
    reason := decision.Body.Reason
}`,
        rust: `if let Some(decision) = client.wait_for_decision(&request_id, 25).await? {
    if let Some(body) = &decision.body {
        if body.is_approved() {
            // Execute the agent's action
        } else {
            let reason = &body.reason;
        }
    }
}`,
      }),
    },
    submitAck: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `# After receiving a decision: confirm delivery to the gateway (fire-and-forget)
await client.submit_ack(msg_id, request_id)`,
        typescript: `// After receiving a decision: confirm delivery to the gateway (fire-and-forget)
await client.submitAck(msgId, requestId);`,
        csharp: `// After receiving a decision: confirm delivery to the gateway (fire-and-forget)
await client.SubmitAckAsync(msgId, requestId);`,
        go: `// After receiving a decision: confirm delivery to the gateway (fire-and-forget)
err := client.SubmitAck(msgID, requestID)`,
        rust: `// After receiving a decision: confirm delivery to the gateway (fire-and-forget)
client.submit_ack(&msg_id, &request_id).await?;`,
      }),
    },
    withdrawExchange: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `client.withdraw_exchange(request_id)`,
        typescript: `await client.withdrawExchange(requestId);`,
        csharp: `await client.WithdrawExchangeAsync(requestId);`,
        go: `err := client.WithdrawExchange(requestID)`,
        rust: `client.withdraw_exchange(&request_id).await?;`,
      }),
    },
    revokePairing: {
      multi: true,
      snippets: sdkSnippets(urls, {
        python: `client.revoke_pairing(routing_token)`,
        typescript: `await client.revokePairing(routingToken);`,
        csharp: `await client.RevokePairingAsync(routingToken);`,
        go: `err := client.RevokePairing(routingToken)`,
        rust: `client.revoke_pairing(&routing_token).await?;`,
      }),
    },
    architectureDiagram: {
      multi: false,
      fixedLabel: "Diagram",
      snippets: [
        {
          id: "text",
          label: "Diagram",
          lang: "text",
          code: `┌─────────────────┐     HTTPS       ┌──────────────────────┐
│  Your Enforcer   │ ──────────────→ │ Integrations Gateway │
│  (custom / sample)│                 │  (${gatewayHost})   │
└─────────────────┘                  └──────────┬───────────┘
                                                │
                                     Internal routing
                                                │
                                     ┌──────────▼───────────┐
                                     │  Enterprise platform  │
                                     │  services (internal;  │
                                     │  not exposed to       │
                                     │  enforcers directly)  │
                                     └──────────────────────┘`,
        },
      ],
    },
    runTestEnforcer: {
      multi: true,
      snippets: [
        { id: "python", label: "Python", lang: "bash", code: `cd src/python\npip install -e .\npython test_enforcer.py` },
        { id: "typescript", label: "TypeScript", lang: "bash", code: `cd src/typescript/test-enforcer\nnpm install\nnpx ts-node index.ts` },
        { id: "csharp", label: ".NET", lang: "bash", code: `cd src/dotnet/Airlock.Gateway.Sdk.TestEnforcer\ndotnet run` },
        { id: "go", label: "Go", lang: "bash", code: `cd src/go\ngo run ./cmd/test-enforcer` },
        { id: "rust", label: "Rust", lang: "bash", code: `cd src/rust\ncargo run --bin test_enforcer` },
      ],
    },
  };
}
