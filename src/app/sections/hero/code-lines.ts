export interface CodeToken {
  text: string;
  kind?: 'keyword' | 'string';
}

export type CodeLine = CodeToken[];

/** Monta as linhas de `const <name> = { ... };` com destaque de sintaxe. */
export function objectLiteral(name: string, fields: Record<string, string | string[]>): CodeLine[] {
  const str = (value: string): CodeToken => ({ text: `"${value}"`, kind: 'string' });
  const list = (values: string[]): CodeLine => [
    { text: '[' },
    ...values.flatMap((value, i) => (i ? [{ text: ', ' }, str(value)] : [str(value)])),
    { text: ']' },
  ];

  const body = Object.entries(fields).map(([key, value]): CodeLine => [
    { text: `  ${key}: ` },
    ...(Array.isArray(value) ? list(value) : [str(value)]),
    { text: ',' },
  ]);

  return [[{ text: 'const', kind: 'keyword' }, { text: ` ${name} = {` }], ...body, [{ text: '};' }]];
}
