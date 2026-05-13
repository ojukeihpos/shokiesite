import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', fontSize: 10 },
  header: { fontSize: 20, marginBottom: 20, color: '#FFB100', fontWeight: 'bold' },
  itemContainer: { marginBottom: 15 },
  itemTitle: { fontSize: 12, fontWeight: 'bold', marginBottom: 2 },
  meta: { fontSize: 9, color: '#666', marginBottom: 5 },
  bullet: { marginLeft: 10, marginBottom: 2 }
});

export const ResumePDF = ({ title, items, links }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.header}>Sophie | {title}</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          {links?.map((link: any, i: number) => (
            <Text key={i} style={{ fontSize: 8, color: '#666' }}>
              {link.label}: {link.href} {i < links.length - 1 ? ' | ' : ''}
            </Text>
          ))}
        </View>
      </View>
      {items.map((item: any, idx: number) => (
        <View key={idx} style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.meta}>{item.date} | {item.skills}</Text>
          {item.bullets.map((bullet: string, bIdx: number) => (
            <Text key={bIdx} style={styles.bullet}>{`>`} {bullet}</Text>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);