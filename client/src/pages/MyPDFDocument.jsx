import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image
} from '@react-pdf/renderer'


export default function MyPDFDocument() {
    return (
        <Document>
            <Page>
                <Text>Hello world</Text>
                <Text>
                    asdasdasdasd asdasdasd
                </Text>
            </Page>
        </Document>
    )
}