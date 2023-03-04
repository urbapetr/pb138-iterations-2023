<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />

    <xsl:template match="group">
            <id>
                <xsl:value-of select="@id" />
            </id>
            <groupname>
                <xsl:value-of select="groupname" />
            </groupname>
            <description>
                <xsl:value-of select="description" />
            </description>
        <members>
            <xsl:apply-templates select="members/member" />
        </members>

        <posts>
            <xsl:apply-templates select="posts/post" />
        </posts>
    </xsl:template>

    <xsl:template match="member">
        <id>
            <xsl:value-of select="@id" />
        </id>
        <username>
            <xsl:value-of select="@username" />
        </username>
    </xsl:template>

    <xsl:template match="post">
        <id>
            <xsl:value-of select="@id" />
        </id>
        <sent>
            <xsl:value-of select="@sent" />
        </sent>
        <reply_to>
            <xsl:value-of select="@reply_to" />
        </reply_to>
        <post>
            <xsl:value-of select="content" />
        </post>
    </xsl:template>

</xsl:stylesheet>